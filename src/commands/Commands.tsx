import { useEffect, useState } from "react"
import { useThemeContext } from "../ThemeContext"
import Laravel from "./components/laravel/Laravel"
import Django from "./components/django/Django"

const Commands = () => {
    const stacks = ["laravel", "django"]
    const [currentStack, setCurrentStack,] = useState<string>("Laravel")
    const { darkMode, setSideNavs, activeSection, setActiveSection } = useThemeContext();
    useEffect(() => (
        setSideNavs(stacks)
    ), []);
    return (
        <div id="commands" className="flex">
            <nav className="flex flex-col w-1/7 my-2 py-2">
                {stacks.map(stack => (
                    <button onClick={() => setActiveSection(stack)} className={`capitalize text-lg ${`${darkMode ? "text-white" : "text-blue-600"} font-bold`
                        } hover:scale-110 ease-in-out duration-400 font-semibold border-b-2 border-r-2 rounded-md py-1`}
                    >{stack}</button>
                ))}
            </nav>
            <div className="mx-auto w-5/7">
                {activeSection == "laravel" &&
                    <Laravel />
                }
                {
                    activeSection == "django" &&
                    <Django />
                }
            </div>
        </div>
    )
}

export default Commands