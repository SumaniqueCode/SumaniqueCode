import { useEffect } from "react";
import { useThemeContext } from "../ThemeContext";
import Laravel from "./components/laravel/Laravel";
import Django from "./components/django/Django";
import Github from "./components/github/Github";
import ReactJS from "./components/react/ReactJs";

const Commands = () => {
    const stacks = ["github", "laravel", "django", "reactJS",];
    const { darkMode, setSideNavs, activeSection, setActiveSection } = useThemeContext();

    useEffect(() => {
        setSideNavs(stacks);
    }, []);

    return (
        <div id="commands" className="flex flex-col md:flex-row gap-4 px-2 md:px-0">
            <nav className="flex md:flex-col overflow-x-auto md:overflow-visible w-full md:w-48 lg:w-64 my-2 py-2 gap-2 scrollbar-hide">
                {stacks.map(stack => (
                    <button
                        key={stack}
                        onClick={() => setActiveSection(stack)}
                        className={`capitalize cursor-pointer text-base md:text-lg whitespace-nowrap px-4 md:px-2 ${darkMode ? "text-white" : "text-blue-600"} font-bold hover:scale-105 md:hover:scale-105 ease-in-out duration-300 border-b-2 border-r-2 rounded-md py-1`}
                    >
                        {stack}
                    </button>
                ))}
            </nav>
            <div className="flex-1 w-full max-w-full overflow-hidden">
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
