import { useEffect, useState } from "react";
import { useThemeContext } from "../ThemeContext";
import TopNav from "./components/TopNav";
import ScrollUpArrow from "./components/ScrollUpArrow";

const Header = () => {
  const { darkMode, scroller } = useThemeContext();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollUp, setShowScrollUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollUp(window.scrollY > window.innerHeight * 0.1);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    scroller(sectionId);
  };
  const navButtons = ["home", "projects"];

  return (
    <>
      <TopNav
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        darkMode={darkMode}
        navButtons={navButtons}
      />

      <div className={`fixed left-5 -bottom-3 transform -translate-y-1/2 z-50 transition-all duration-500 ease-in-out ${showScrollUp ? "translate-x-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"}`}>
        <ScrollUpArrow
          darkMode={darkMode}
          scrollToSection={scrollToSection}
        />
      </div>
    </>
  );
};

export default Header;
