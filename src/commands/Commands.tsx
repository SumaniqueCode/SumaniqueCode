import { useEffect } from "react";
import { useThemeContext } from "../ThemeContext";
import Laravel from "./components/laravel/Laravel";
import Django from "./components/django/Django";
import Github from "./components/github/Github";
import ReactJS from "./components/react/ReactJs";
import SEO from "@/components/SEO";
import ShimmerGradientOverlay from "@/components/ShimmerGradientOverlay";

const Commands = () => {
    const stacks = ["github", "laravel", "django", "reactJS",];
    const { darkMode, setSideNavs, activeSection, setActiveSection } = useThemeContext();
    const activeStack = stacks.includes(activeSection) ? activeSection : "github";

    useEffect(() => {
        setSideNavs([]);
    }, []);

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }, [activeStack]);

    return (
        <div id="commands" className="flex flex-col md:flex-row gap-4 px-2 md:px-0">
            <SEO
                title="Developer Command Reference | Suman Regmi"
                description="Quick-reference command sheets for Git/GitHub, Laravel, Django, and React.js, curated by Suman Regmi."
                path="/commands"
            />
            <h1 className="sr-only">Developer Command Reference</h1>
            <nav
                role="tablist"
                aria-label="Technology stacks"
                className={`flex md:flex-col overflow-x-auto md:overflow-visible w-full md:w-48 lg:w-64 my-2 py-2 gap-2 scrollbar-hide sticky top-[96px] self-start z-10 ${darkMode ? "bg-gray-900" : "bg-white"}`}
            >
                {stacks.map(stack => (
                    <button
                        key={stack}
                        id={`tab-${stack}`}
                        role="tab"
                        aria-selected={activeStack === stack}
                        aria-controls="commands-panel"
                        onClick={() => setActiveSection(stack)}
                        className={`relative group overflow-hidden capitalize cursor-pointer text-base md:text-lg whitespace-nowrap px-4 md:px-2 py-1 rounded-md font-bold ease-in-out duration-300 hover:scale-105 md:hover:scale-105 border-b-2 border-r-2 shadow-sm ${activeStack === stack
                            ? darkMode ? "bg-[var(--color-primary-dark)] text-white" : "bg-[var(--color-primary)] text-white"
                            : darkMode ? "bg-gray-800 text-white" : "bg-white text-blue-600"
                            }`}
                    >
                        <ShimmerGradientOverlay variant="blue" className="rounded-md" runOnce />
                        <span className="relative z-10">{stack}</span>
                    </button>
                ))}
            </nav>
            <div
                id="commands-panel"
                role="tabpanel"
                aria-labelledby={`tab-${activeStack}`}
                className="flex-1 w-full max-w-full overflow-hidden"
            >
                {activeSection === "django" ? (
                    <Django />
                ) : activeSection === "laravel" ? (
                    <Laravel />
                ) : activeSection === "reactJS" ? (
                    <ReactJS />
                ) :
                    (
                        <Github />
                    )}
            </div>
        </div>
    );
};

export default Commands;
