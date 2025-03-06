import DarkToggler from "./components/DarkToggler";
import Logo from "../../../public/images/logos/admin_bw.jpg";
import { useThemeContext } from "../../ThemeContext";
import { useState } from "react";

const Header = () => {
  const { activeSection, setActiveSection, darkMode } = useThemeContext();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
  };


  const navButtons = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];

  return (
    <header className="fixed w-full z-10 border-b-6 rounded-b-2xl shadow-md overflow-hidden bg-white">
      {/* Animated background constrained to header */}
      <div className={`absolute inset-0 bg-gray-900 transition-[clip-path] duration-500 ease-in-out
        ${darkMode ? 'clip-path-full' : 'clip-path-circle'}`} />

      {/* Content container */}
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div onClick={() => scrollToSection('home')} className="cursor-pointer flex items-center space-x-2">
            <img src={Logo} className="h-12 rounded-full" alt="SumaniqueCode" />
            <span className="text-2xl font-bold">
              <span className={`${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Dev</span>Portfolio
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navButtons.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize ${activeSection === section
                  ? `${darkMode ? 'text-blue-400' : 'text-blue-600'} font-semibold`
                  : `${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`
                  } transition-colors hover:scale-115 ease-in-out duration-400 cursor-pointer`}
              >
                {section}
              </button>
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
          <nav className={`md:hidden ${darkMode ? 'bg-gray-900' : 'bg-white'} py-4 px-6 space-y-3`}>
            {navButtons.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`block capitalize w-full text-left py-2 ${activeSection === section
                  ? `${darkMode ? 'text-blue-400' : 'text-blue-600'} font-medium`
                  : `${darkMode ? 'text-gray-300' : 'text-gray-600'}`
                  }`}
              >
                {section}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;