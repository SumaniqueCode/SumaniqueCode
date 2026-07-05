import DarkToggler from "./DarkToggler";

interface navProps {
    darkMode: boolean;
    sideNavs: string[];
    activeSection: string;
    scrollToSection: (section: string) => void;
}

const SideNav = ({ darkMode, sideNavs, activeSection, scrollToSection }: navProps) => {
    return (
        <header className="flex flex-col items-center space-y-6">
            <nav className="flex flex-col space-y-4" aria-label="Section navigation">
                {sideNavs.map((section) => (
                    <button
                        key={section}
                        onClick={() => scrollToSection(section)}
                        aria-current={activeSection === section ? "true" : undefined}
                        className={`capitalize text-md cursor-pointer ${activeSection === section
                            ? `${darkMode ? "text-blue-400" : "text-blue-600"} font-bold`
                            : `${darkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900"}`
                            } hover:scale-105 ease-in-out duration-400 font-semibold`}
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
