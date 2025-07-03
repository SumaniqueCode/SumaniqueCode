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
        <div id="commands" className="flex">
            <nav className="flex flex-col w-2/7 lg:w-1/7 my-2 py-2">
                {stacks.map(stack => (
                    <button
                        key={stack}
                        onClick={() => setActiveSection(stack)}
                        className={`capitalize text-lg ${darkMode ? "text-white" : "text-blue-600"} font-bold hover:scale-110 ease-in-out duration-400 border-b-2 border-r-2 rounded-md py-1`}
                    >
                        {stack}
                    </button>
                ))}
            </nav>
            <div className="mx-auto w-3/7 lg:w-5/7">
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
