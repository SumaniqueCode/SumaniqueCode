import DarkToggler from "./DarkToggler";
import { optimizedAdminBw } from "../../assets/images/logos";

interface navProps {
    darkMode: boolean;
    sideNavs: string[];
    activeSection: string;
    scrollToSection: (section: string) => void;
}

const SideNav = ({ darkMode, sideNavs, activeSection, scrollToSection }: navProps) => {
    return (
        <header className="flex flex-col items-center space-y-6">
            <div onClick={() => scrollToSection("top")} className="cursor-pointer flex items-center space-x-2">
                <picture>
                    <source srcSet={optimizedAdminBw.avif} type="image/avif" />
                    <source srcSet={optimizedAdminBw.webp} type="image/webp" />
                    <img src={optimizedAdminBw.fallback} className="h-12 rounded-full" alt="SumaniqueCode" />
                </picture>
            </div>

            <nav className="flex flex-col space-y-4">
                {sideNavs.map((section) => (
                    <button
                        key={section}
                        onClick={() => scrollToSection(section)}
                        className={`capitalize text-lg ${activeSection === section
                            ? `${darkMode ? "text-blue-400" : "text-blue-600"} font-bold`
                            : `${darkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900"}`
                            } hover:scale-110 ease-in-out duration-400 font-semibold`}
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
