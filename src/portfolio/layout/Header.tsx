import { useEffect, useState } from "react";
import { useThemeContext } from "../../ThemeContext";
import SideNav from "./components/SideNav";
import TopNav from "./components/TopNav";
import ScrollUpArrow from "./components/ScrollUpArrow";

const Header = () => {
  const { darkMode, activeSection, setActiveSection, scroller } = useThemeContext();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSideNav, setShowSideNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navButtons.map((id) => document.getElementById(id));
      let closestSection = "home";
      let minDistance = Infinity;

      sections.forEach((section) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          const distance = Math.abs(rect.top);

          if (distance < minDistance) {
            minDistance = distance;
            closestSection = section.id;
          }
        }
      });
      setActiveSection(closestSection);
      if (window.scrollY > window.innerHeight * 0.1) {
        setShowSideNav(true);
      } else {
        setShowSideNav(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    // if (sectionId === "top") {
    //   window.scrollTo({ top: 0, behavior: "smooth" });
    // } else {
    //   const element = document.getElementById(sectionId);
    //   if (element) element.scrollIntoView({ behavior: "smooth" });
    // }
    scroller(sectionId);
  };
  const navButtons = ["home", "about", "skills", "projects", "experience", "contact", "commands"];

  return (
    <>
      <aside
        className={`fixed right-0 top-1/2 transform -translate-y-1/2 z-50 rounded-tl-2xl rounded-bl-2xl border-4 shadow-lg px-1 py-4 
        transition-transform duration-500 ease-in-out hidden md:block ${showSideNav ? "translate-x-0" : "translate-x-full"} 
        ${darkMode ? "bg-gray-900 text-white border-gray-700" : "bg-white text-gray-900 border-gray-300"}`}
      >
        <SideNav
          darkMode={darkMode}
          activeSection={activeSection}
          scrollToSection={scrollToSection}
          navButtons={navButtons}
        />
      </aside>

      <TopNav
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        darkMode={darkMode}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        navButtons={navButtons}
      />

      <div className={`fixed right-5 bottom-5 transform -translate-y-1/2 z-50 transition-all duration-500 ease-in-out ${showSideNav ? "translate-x-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"}`}>
        <ScrollUpArrow
          darkMode={darkMode}
          scrollToSection={scrollToSection}
        />
      </div>
    </>
  );
};

export default Header;