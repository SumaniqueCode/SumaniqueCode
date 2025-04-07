import { Link, useLocation } from "react-router-dom";
import DarkToggler from "./DarkToggler";
import { useEffect, useState } from "react";

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
    <header className="w-full z-20 border-b-6 rounded-b-2xl shadow-md overflow-hidden">
      {/* Content container */}
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to='home' className="flex items-center space-x-2">
          <img src="/images/logos/admin_bw.jpg" className="h-12 rounded-full" alt="SumaniqueCode" />
          <span className="text-2xl font-bold">
            <span className={`${darkMode ? "text-blue-400" : "text-blue-600"}`}>Dev</span>Portfolio
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navButtons.map((section) => (
            <Link to={section}
              key={section}
              className={`capitalize ${activeNav === section
                ? `${darkMode ? "text-blue-400" : "text-blue-600"} font-semibold`
                : `${darkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900"}`
                } hover:scale-115 ease-in-out duration-400 cursor-pointer`}
            >
              {section}
            </Link>
          ))}
        </nav>

        {/* Dark mode toggle */}
        <DarkToggler />

        {/* Mobile menu button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
        <nav className="md:hidden py-4 px-6 space-y-3">
          {navButtons.map((section) => (
            <Link to={section}
              key={section}
              className={`capitalize block w-full text-left ${activeNav === section
                ? `${darkMode ? "text-blue-400" : "text-blue-600"} font-semibold`
                : `${darkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900"}`
                } hover:scale-115 ease-in-out duration-400 cursor-pointer`}
            >
              {section}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}

export default TopNav