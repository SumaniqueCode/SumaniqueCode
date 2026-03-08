import { ArrowUp } from "lucide-react";
import { useEffect, useRef } from "react";

interface ArrowProps {
  darkMode: boolean;
  scrollToSection: (sectionId: string) => void;
}

const ScrollUpArrow = ({ darkMode, scrollToSection }: ArrowProps) => {
  const progressRingRef = useRef<HTMLDivElement>(null);
  const scrollPercentage = useRef(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      scrollPercentage.current = scrollHeight > 0 ? Math.min(100, Math.max(0, (currentScroll / scrollHeight) * 100)) : 0;
    };

    const updateRing = () => {
      if (progressRingRef.current) {
        const bgColor = darkMode ? "#4b5563" : "#d1d5db";
        const percent = scrollPercentage.current;
        progressRingRef.current.style.background = ` conic-gradient( #3b82f6 0% ${percent}%, ${bgColor} ${percent}% 100% ) `;
        progressRingRef.current.style.filter = percent > 5 ? "drop-shadow(0 0 4px #3b82f6)" : "none";
      }
      rafRef.current = requestAnimationFrame(updateRing);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    rafRef.current = requestAnimationFrame(updateRing);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, [darkMode]);

  return (
    <div onClick={() => scrollToSection("top")} className="cursor-pointer">
      <style>{`
        .progress-ring {
          transform: rotate(270deg);
          mask: radial-gradient(transparent 25px, #000 26px);
          -webkit-mask: radial-gradient(transparent 25px, #000 26px);
          transition: filter 0.3s ease;
        }
      `}</style>

      <div className={`relative w-16 h-16 rounded-full flex items-center justify-center shadow-lg ${darkMode ? "bg-gray-800" : "bg-white"}`} >
        <div ref={progressRingRef} className="progress-ring absolute inset-0 rounded-full" />
        <div className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110 ${darkMode ? "bg-gray-800" : "bg-white"}`} >
          <ArrowUp size={28} className={darkMode ? "text-white" : "text-gray-900"} />
        </div>
      </div>
    </div>
  );
};

export default ScrollUpArrow;
