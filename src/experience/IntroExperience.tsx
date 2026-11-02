import { Suspense, lazy, useEffect, useRef, useState } from "react";

const Experience3D = lazy(() => import("./Experience3D"));

interface IntroExperienceProps {
  onComplete: () => void;
  /** Start the journey at the last section (used when re-entered by scrolling up). */
  startAtEnd?: boolean;
}

const LoadingSplash = () => (
  <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#05060f] text-white">
    <div className="h-10 w-10 animate-spin rounded-full border-2 border-white/20 border-t-blue-400" />
    <p className="mt-4 text-sm tracking-widest text-gray-400 uppercase">Preparing experience</p>
  </div>
);

/* Full-screen 3D intro gate. Lazy-loads the scene, locks body scroll while open,
   skips entirely under reduced motion, and fades out before handing off. */
const IntroExperience = ({ onComplete, startAtEnd = false }: IntroExperienceProps) => {
  const [leaving, setLeaving] = useState(false);
  // Re-entry from the portfolio fades in (mirror of the exit); first load covers the page at once.
  const [shown, setShown] = useState(!startAtEnd);
  const barRef = useRef<HTMLDivElement>(null);
  const finished = useRef(false);

  useEffect(() => {
    if (shown) return;
    const id = requestAnimationFrame(() => setShown(true));
    return () => cancelAnimationFrame(id);
  }, [shown]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      onComplete();
      return;
    }
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [onComplete]);

  const finish = () => {
    if (finished.current) return;
    finished.current = true;
    setLeaving(true);
    window.setTimeout(onComplete, 900);
  };

  return (
    <div
      className={`fixed inset-0 z-[100] bg-[#05060f] transition-opacity duration-[900ms] ${leaving || !shown ? "opacity-0" : "opacity-100"}`}
      aria-label="Interactive 3D introduction"
    >
      <Suspense fallback={<LoadingSplash />}>
        <Experience3D onComplete={finish} progressRef={barRef} startAtEnd={startAtEnd} />
      </Suspense>

      <button
        onClick={finish}
        className="absolute right-5 top-5 z-10 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20"
      >
        Skip intro →
      </button>

      {/* Scroll progress */}
      <div className="absolute bottom-0 left-0 h-1 w-full bg-white/10">
        <div ref={barRef} className="h-full w-0 bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500" />
      </div>
    </div>
  );
};

export default IntroExperience;
