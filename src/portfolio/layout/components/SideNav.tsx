import DarkToggler from "./DarkToggler";

interface navProps {
    darkMode: boolean;
    navButtons: string[];
    activeSection: string;
    scrollToSection: (section: string) => void;
}

const SideNav = ({ darkMode, navButtons, activeSection, scrollToSection }: navProps) => {
    return (
        <header className="flex flex-col items-center space-y-6">
            <div onClick={() => scrollToSection("top")} className="cursor-pointer flex items-center space-x-2">
                <img src="/images/logos/admin_bw.jpg" className="h-12 rounded-full" alt="SumaniqueCode" />
            </div>

            <nav className="flex flex-col space-y-4">
                {navButtons.map((section) => (
                    <button
                        key={section}
                        onClick={() => scrollToSection(section)}
                        className={`capitalize text-lg ${activeSection === section
                            ? `${darkMode ? "text-blue-400" : "text-blue-600"} font-bold`
                            : `${darkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900"}`
                            } transition-colors duration-300 font-semibold`}
                    >
                        {section}
                    </button>
                ))}
            </nav>

            <DarkToggler />
        </header>
    );
};

export default SideNav;
