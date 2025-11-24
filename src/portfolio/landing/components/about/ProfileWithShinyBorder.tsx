import { useEffect, useRef } from 'react';

interface PremiumProfileBorderProps {
  darkMode: boolean;
  profile: string;
  background: string;
}

const PremiumProfileBorder = ({ darkMode, profile, background }: PremiumProfileBorderProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>();
  const particlesRef = useRef<any[]>([]);
  const shimmerPointsRef = useRef<any[]>([]);
  const rotationAngleRef = useRef(0);
  const darkModeRef = useRef(darkMode);

  useEffect(() => {
    darkModeRef.current = darkMode;
  }, [darkMode]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(width, height) / 2 -30;

    const initParticles = () => {
      particlesRef.current = [];
      for (let i = 0; i < 200; i++) {
        const angle = Math.random() * Math.PI * 2;
        const distance = radius - 5 + (Math.random() * 10 - 5);
        particlesRef.current.push({
          angle,
          distance,
          baseDistance: distance,
          x: centerX + Math.cos(angle) * distance,
          y: centerY + Math.sin(angle) * distance,
          size: 1 + Math.random() * 3,
          speed: 0.002 + Math.random() * 0.004,
          opacity: 0.2 + Math.random() * 0.8,
          hue: darkModeRef.current ? 200 + Math.random() * 40 : 220 + Math.random() * 30,
          saturation: 80 + Math.random() * 20,
          brightness: 60 + Math.random() * 40,
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: 0.02 + Math.random() * 0.03,
          distanceVariation: Math.random() * 4,
          distanceSpeed: 0.001 + Math.random() * 0.002
        });
      }
    };

    const initShimmerPoints = () => {
      shimmerPointsRef.current = [];
      for (let i = 0; i < 3; i++) {
        shimmerPointsRef.current.push({
          angle: (Math.PI * 2 / 3) * i,
          speed: 0.3 + Math.random() * 0.3,
          size: 25 + Math.random() * 15,
          opacity: 0.6 + Math.random() * 0.4
        });
      }
    };

    const drawBaseRing = () => {
      for (let i = 0; i < 3; i++) {
        const ringWidth = 3 - i * 0.5;
        const ringOpacity = 0.7 - i * 0.2;
        const ringRadius = radius - i * 2;

        ctx.beginPath();
        ctx.arc(centerX, centerY, ringRadius, 0, Math.PI * 2);
        ctx.lineWidth = ringWidth;

        const gradient = ctx.createLinearGradient(
          centerX - ringRadius,
          centerY - ringRadius,
          centerX + ringRadius,
          centerY + ringRadius
        );

        if (darkModeRef.current) {
          gradient.addColorStop(0, `rgba(96, 165, 250, ${ringOpacity})`);
          gradient.addColorStop(0.3, `rgba(147, 197, 253, ${ringOpacity + 0.1})`);
          gradient.addColorStop(0.6, `rgba(59, 130, 246, ${ringOpacity})`);
          gradient.addColorStop(1, `rgba(96, 165, 250, ${ringOpacity})`);
        } else {
          gradient.addColorStop(0, `rgba(37, 99, 235, ${ringOpacity})`);
          gradient.addColorStop(0.3, `rgba(59, 130, 246, ${ringOpacity + 0.1})`);
          gradient.addColorStop(0.6, `rgba(29, 78, 216, ${ringOpacity})`);
          gradient.addColorStop(1, `rgba(37, 99, 235, ${ringOpacity})`);
        }

        ctx.strokeStyle = gradient;
        ctx.stroke();
      }

      const glowGradient = ctx.createRadialGradient(
        centerX, centerY, radius - 10,
        centerX, centerY, radius + 20
      );

      if (darkModeRef.current) {
        glowGradient.addColorStop(0, 'rgba(96, 165, 250, 0.2)');
        glowGradient.addColorStop(1, 'rgba(96, 165, 250, 0)');
      } else {
        glowGradient.addColorStop(0, 'rgba(37, 99, 235, 0.2)');
        glowGradient.addColorStop(1, 'rgba(37, 99, 235, 0)');
      }

      ctx.fillStyle = glowGradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius + 20, 0, Math.PI * 2);
      ctx.fill();
    };

    const drawRotatingRing = () => {
      rotationAngleRef.current += 0.005;

      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(rotationAngleRef.current);
      ctx.translate(-centerX, -centerY);

      const ringGradient = ctx.createConicGradient(0, centerX, centerY);

      if (darkModeRef.current) {
        ringGradient.addColorStop(0, 'rgba(96, 165, 250, 0.8)');
        ringGradient.addColorStop(0.25, 'rgba(147, 197, 253, 0.9)');
        ringGradient.addColorStop(0.5, 'rgba(59, 130, 246, 0.7)');
        ringGradient.addColorStop(0.75, 'rgba(147, 197, 253, 0.9)');
        ringGradient.addColorStop(1, 'rgba(96, 165, 250, 0.8)');
      } else {
        ringGradient.addColorStop(0, 'rgba(37, 99, 235, 0.8)');
        ringGradient.addColorStop(0.25, 'rgba(59, 130, 246, 0.9)');
        ringGradient.addColorStop(0.5, 'rgba(29, 78, 216, 0.7)');
        ringGradient.addColorStop(0.75, 'rgba(59, 130, 246, 0.9)');
        ringGradient.addColorStop(1, 'rgba(37, 99, 235, 0.8)');
      }

      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.lineWidth = 4;
      ctx.strokeStyle = ringGradient;
      ctx.stroke();

      ctx.restore();
    };

    const drawParticles = () => {
      const time = Date.now() / 1000;

      particlesRef.current.forEach(particle => {
        particle.pulse += particle.pulseSpeed;
        particle.angle += particle.speed;

        const distVariation = Math.sin(time * particle.distanceSpeed) * particle.distanceVariation;
        particle.distance = particle.baseDistance + distVariation;

        particle.x = centerX + Math.cos(particle.angle) * particle.distance;
        particle.y = centerY + Math.sin(particle.angle) * particle.distance;

        const pulseOpacity = particle.opacity * (0.6 + 0.4 * Math.sin(particle.pulse));
        const pulseSize = particle.size * (0.7 + 0.3 * Math.sin(particle.pulse));

        const glow = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, pulseSize * 2
        );

        const hueVariation = Math.sin(time * 0.3) * 10;
        const currentHue = particle.hue + hueVariation;

        glow.addColorStop(0, `hsla(${currentHue}, ${particle.saturation}%, ${particle.brightness}%, ${pulseOpacity})`);
        glow.addColorStop(1, `hsla(${currentHue}, ${particle.saturation}%, ${particle.brightness}%, 0)`);

        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, pulseSize * 2, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    const drawShimmerEffect = () => {
      shimmerPointsRef.current.forEach(point => {
        point.angle += point.speed * 0.01;

        const x = centerX + Math.cos(point.angle) * radius;
        const y = centerY + Math.sin(point.angle) * radius;

        const gradient = ctx.createRadialGradient(x, y, 0, x, y, point.size);

        if (darkModeRef.current) {
          gradient.addColorStop(0, `rgba(255, 255, 255, ${point.opacity})`);
          gradient.addColorStop(0.5, `rgba(191, 219, 254, ${point.opacity * 0.6})`);
        } else {
          gradient.addColorStop(0, `rgba(255,255,255, ${point.opacity})`);
          gradient.addColorStop(0.5, `rgba(30,144,255, ${point.opacity * 0.6})`);
        }
        gradient.addColorStop(1, 'rgba(204, 255, 255, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, point.size, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    const animate = () => {
      if (!ctx) return;

      ctx.clearRect(0, 0, width, height);
      drawBaseRing();
      drawRotatingRing();
      drawParticles();
      drawShimmerEffect();

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    initParticles();
    initShimmerPoints();
    animate();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative w-[320px] h-[320px] flex items-center justify-center">
        <canvas ref={canvasRef} width={320} height={320} className="inset-0 z-4 mt-7" />
        <div className="absolute w-[310px] h-[310px] rounded-full z-5">
          <img src={background} alt="Profile Background" className="w-full h-full object-cover" />
        </div>
        <div className="absolute w-[310px] h-[310px] rounded-full z-6">
          <img src={profile} alt="Profile" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default PremiumProfileBorder;