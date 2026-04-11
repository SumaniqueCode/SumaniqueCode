import { useEffect, useRef, useState } from "react";

const LazySection = ({ 
  children, 
  threshold = 0.1 
}: { 
  children: React.ReactNode; 
  threshold?: number;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once loaded, stop observing
          if (sectionRef.current) {
            observer.unobserve(sectionRef.current);
          }
        }
      },
      {
        threshold,
        rootMargin: "20px", // Reverted to 20px so that CSS mount animations trigger visibly on screen
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [threshold]);

  return (
    <div ref={sectionRef} className="">
      {isVisible ? children : (
        // Invisible placeholder to maintain scroll position without layout shift or ugly gray flashes
        <div className="h-96 opacity-0"></div>
      )}
    </div>
  );
};

export default LazySection