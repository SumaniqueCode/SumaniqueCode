import React, { useEffect, useRef } from 'react';
import Header from "./Header";
import { useThemeContext } from "../ThemeContext";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

interface Point {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

const Layout: React.FC = () => {
  const { darkMode } = useThemeContext();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const pointsRef = useRef<Point[]>([]);
  const mouseRef = useRef({ x: 0, y: 0, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Resize canvas to fill the screen
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initPoints();
    };

    // Track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY,
        active: true
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    // Initialize points
    const initPoints = () => {
      const pointCount = Math.min(100, Math.max(60, Math.floor(canvas.width * canvas.height / 50000)));
      const points: Point[] = [];

      for (let i = 0; i < pointCount; i++) {
        points.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: 2
        });
      }

      pointsRef.current = points;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Set colors based on the theme
      const pointColor = darkMode ? 'rgba(180, 180, 255, 0.8)' : 'rgba(100, 100, 255, 0.8)';
      const lineColor = darkMode ? 'rgba(180, 180, 255, ' : 'rgba(100, 100, 255, ';
      const points = pointsRef.current;
      const maxDist = Math.min(canvas.width, canvas.height) * 0.3;
      const mouse = mouseRef.current;

      // Update and draw points
      for (let i = 0; i < points.length; i++) {
        const point = points[i];

        // Move points
        point.x += point.vx;
        point.y += point.vy;

        // Wrap around edges
        if (point.x < 0) point.x = canvas.width;
        if (point.x > canvas.width) point.x = 0;
        if (point.y < 0) point.y = canvas.height;
        if (point.y > canvas.height) point.y = 0;

        // Mouse influence - points are attracted to mouse position
        if (mouse.active) {
          const dx = mouse.x - point.x;
          const dy = mouse.y - point.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDist) {
            const force = (maxDist - dist) / maxDist * 0.05;
            point.vx += (dx / dist) * force;
            point.vy += (dy / dist) * force;
          }
        }

        // Limit velocity
        const speed = Math.sqrt(point.vx * point.vx + point.vy * point.vy);
        if (speed > 1) {
          point.vx = (point.vx / speed) * 1;
          point.vy = (point.vy / speed) * 1;
        }

        // Draw connections (lines)
        for (let j = i + 1; j < points.length; j++) {
          const point2 = points[j];
          const dx = point.x - point2.x;
          const dy = point.y - point2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDist) {
            // Opacity based on distance
            const opacity = 1 - (dist / maxDist);

            // Subtle curve for dandelion-like ray
            const cpX = (point.x + point2.x) / 2 + (Math.random() - 0.5) * 5;
            const cpY = (point.y + point2.y) / 2 + (Math.random() - 0.5) * 5;

            // Draw the line with a curve
            ctx.beginPath();
            ctx.moveTo(point.x, point.y);
            ctx.quadraticCurveTo(cpX, cpY, point2.x, point2.y);
            ctx.strokeStyle = `${lineColor}${opacity * 0.5})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }

        // Draw point
        ctx.beginPath();
        ctx.arc(point.x, point.y, point.radius, 0, Math.PI * 2);
        ctx.fillStyle = pointColor;
        ctx.fill();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    // Add event listeners
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Initialize and start animation
    resizeCanvas();
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationRef.current);
    };
  }, [darkMode]);

  return (
    <div className={`relative min-h-screen ${darkMode ? 'text-white' : 'text-gray-900'} transition-colors duration-500`}>
      {/* Dark mode overlay */}
      <div
        className={`fixed inset-0 bg-gray-900 transition-[clip-path] duration-800 ease-in-out
          ${darkMode ? 'clip-path-full' : 'clip-path-circle'}`}
      />

      {/* Canvas for constellation network */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none"
        style={{ zIndex: 10 }}
      />

      {/* Content container */}
      <div className="relative z-20 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow relative">
          {/* Page content */}
          <div className="relative">
            <Outlet />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
