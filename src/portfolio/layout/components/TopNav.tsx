import DarkToggler from "./DarkToggler";

interface navProps {
    darkMode: boolean;
    navButtons: string[];
    activeSection: string;
    scrollToSection: (section: string) => void;
    setMobileMenuOpen:(mobileMenuOpen:boolean)=>void;
    mobileMenuOpen:boolean;
  }

const TopNav = ({ darkMode, navButtons, activeSection, scrollToSection,setMobileMenuOpen,mobileMenuOpen }: navProps) => {
  return (
    <header className="w-full z-10 border-b-6 rounded-b-2xl shadow-md overflow-hidden">
    {/* Content container */}
    <div className="container mx-auto px-4 py-4 flex justify-between items-center">
      <div onClick={() => scrollToSection("top")} className="cursor-pointer flex items-center space-x-2">
        <img src="/images/logos/admin_bw.jpg" className="h-12 rounded-full" alt="SumaniqueCode" />
        <span className="text-2xl font-bold">
          <span className={`${darkMode ? "text-blue-400" : "text-blue-600"}`}>Dev</span>Portfolio
        </span>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-8">
        {navButtons.map((section) => (
          <button
            key={section}
            onClick={() => scrollToSection(section)}
            className={`capitalize ${
              activeSection === section
                ? `${darkMode ? "text-blue-400" : "text-blue-600"} font-semibold`
                : `${darkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900"}`
            } hover:scale-115 ease-in-out duration-400 cursor-pointer`}
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
      <nav className={`${darkMode ? "bg-gray-900" : "bg-white"} md:hidden py-4 px-6 space-y-3`}>
        {navButtons.map((section) => (
          <button
            key={section}
            onClick={() => scrollToSection(section)}
            className={`block capitalize w-full text-left py-2 ${
              activeSection === section
                ? `${darkMode ? "text-blue-400" : "text-blue-600"} font-medium`
                : `${darkMode ? "text-gray-300" : "text-gray-600"}`
            }`}
          >
            {section}
          </button>
        ))}
      </nav>
    )}
  </header>
  )
}

export default TopNav