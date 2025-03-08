import DarkToggler from "./DarkToggler";
import MobileNav from "./MobileNav";

interface navProps {
  darkMode: boolean;
  navButtons: string[];
  activeSection: string;
  scrollToSection: (section: string) => void;
  setMobileMenuOpen: (mobileMenuOpen: boolean) => void;
  mobileMenuOpen: boolean;
}

const TopNav = ({ darkMode, navButtons, activeSection, scrollToSection, setMobileMenuOpen, mobileMenuOpen }: navProps) => {
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
              className={`capitalize ${activeSection === section
                ? `${darkMode ? "text-blue-400" : "text-blue-600"} font-semibold`
                : `${darkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900"}`
                } transition-colors hover:scale-115 ease-in-out duration-400 cursor-pointer`}
            >
              {section}
            </button>
          ))}
        </nav>

        {/* Dark mode toggle */}
        <div className="opacity-0 md:opacity-100">
          <DarkToggler />
        </div>

        <MobileNav mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen} />
      </div>
    </header>
  )
}

export default TopNav