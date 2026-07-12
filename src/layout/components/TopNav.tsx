import { Link, useLocation } from "react-router-dom";
import DarkToggler from "./DarkToggler";
import { useEffect, useState } from "react";
import { optimizedAdminBw } from "@/assets/images/logos";

interface navProps {
  darkMode: boolean;
  navButtons: string[];
  setMobileMenuOpen: (mobileMenuOpen: boolean) => void;
  mobileMenuOpen: boolean;
}

const TopNav = ({ darkMode, navButtons, setMobileMenuOpen, mobileMenuOpen, }: navProps) => {
  const [activeNav, setActiveNav] = useState<string>("home")
  const location = useLocation();
  useEffect(() => {
    const currentPath = location.pathname.split("/")[1];
    setActiveNav(currentPath);
  }, [location.pathname]);

  return (
    <header className={`w-full sticky top-0 z-20 border-b-6 rounded-b-2xl shadow-md overflow-hidden ${darkMode ? "bg-gray-900 border-white" : "bg-white border-[var(--color-primary)]"}`}>
      {/* Content container */}
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to='home' className="flex items-center space-x-2">
          <picture>
            <source srcSet={optimizedAdminBw.avif} type="image/avif" />
            <source srcSet={optimizedAdminBw.webp} type="image/webp" />
            <img src={optimizedAdminBw.fallback} className="h-12 rounded-full" alt="SumaniqueCode" />
          </picture>
          <span className="text-2xl font-bold">
            <span className={`${darkMode ? "text-blue-400" : "text-blue-600"}`}>Dev</span>Portfolio
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Primary navigation">
          {navButtons.map((section) => {
            const isActive = activeNav === section;
            return (
              <Link to={section}
                key={section}
                aria-current={isActive ? "page" : undefined}
                className={`group relative px-3 py-2 capitalize cursor-pointer transition-colors duration-300 ${isActive
                  ? `${darkMode ? "text-blue-400" : "text-blue-600"} font-semibold`
                  : `${darkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900"}`
                  }`}
              >
                {section}
                <span
                  className={`absolute left-3 right-3 bottom-1 h-0.5 rounded-full origin-left transition-transform duration-500 ease-out ${darkMode ? "bg-blue-400" : "bg-blue-600"
                    } ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Dark mode toggle */}
        <DarkToggler />

        {/* Mobile menu button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav id="mobile-navigation" className="md:hidden py-4 px-6 space-y-1" aria-label="Mobile navigation">
          {navButtons.map((section) => {
            const isActive = activeNav === section;
            return (
              <Link to={section}
                key={section}
                aria-current={isActive ? "page" : undefined}
                className={`capitalize block w-full text-left px-3 py-2 rounded-lg transition-colors duration-300 cursor-pointer ${isActive
                  ? `${darkMode ? "bg-blue-400/10 text-blue-400" : "bg-blue-50 text-blue-600"} font-semibold`
                  : `${darkMode ? "text-gray-300 hover:bg-gray-800 hover:text-white" : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"}`
                  }`}
              >
                {section}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  )
}

export default TopNav