import { ArrowUp } from "lucide-react";
import { useState, useEffect, useRef } from "react";

interface ArrowProps {
  darkMode: boolean;
  scrollToSection: (sectionId: string) => void;
}

const ScrollUpArrow = ({ darkMode, scrollToSection }: ArrowProps) => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const progressRingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      const calculatedPercentage = scrollHeight > 0 ? Math.min(100, Math.max(0, (currentScroll / scrollHeight) * 100)) : 0;
      setScrollPercentage(calculatedPercentage);
      if (progressRingRef.current) {
        const bgColor = darkMode ? '#4b5563' : '#d1d5db';
        progressRingRef.current.style.background =
          `conic-gradient(#3b82f6 0% ${calculatedPercentage}%, ${bgColor} ${calculatedPercentage}% 100%)`;
        progressRingRef.current.style.filter =
          `drop-shadow(0 0 3px ${calculatedPercentage > 5 ? '#3b82f6' : 'transparent'})`;
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="" onClick={() => scrollToSection("top")}>
      {/* Fixed and simplified CSS */}
      <style>{`
        .progress-ring {
          transform: rotate(270deg);
          mask: radial-gradient(transparent 25px, #000 26px);
          -webkit-mask: radial-gradient(transparent 25px, #000 26px);
          transition: filter 0.3s ease;
        }
      `}</style>
      <div
        className={`relative w-16 h-16 rounded-full flex justify-center items-center cursor-pointer shadow-lg
                   ${darkMode ? 'bg-gray-800' : 'bg-white'}`} >
        {/* Progress ring with ref */}
        <div
          ref={progressRingRef}
          className="progress-ring absolute inset-0 rounded-full"
          style={{
            background: `conic-gradient(#3b82f6 0% ${scrollPercentage}%, ${darkMode ? '#4b5563' : '#d1d5db'} ${scrollPercentage}% 100%)`,
            filter: `drop-shadow(0 0 3px ${scrollPercentage > 5 ? '#3b82f6' : 'transparent'})`
          }}
        />
        <div className={`relative z-10 flex justify-center items-center w-12 h-12 rounded-full
                        ${darkMode ? 'bg-gray-800' : 'bg-white'} duration-500`}>
          <ArrowUp size={28} className={darkMode ? "text-white" : "text-gray-900"} />
        </div>
      </div>
    </div>
  );
};

export default ScrollUpArrow;