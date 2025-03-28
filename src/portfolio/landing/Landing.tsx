import Commands from "../../commands/Commands"
import { useThemeContext } from "../../ThemeContext"
import About from "./components/about/About"
import Contact from "./components/contact/Contact"
import Experience from "./components/experience/Experience"
import Hero from "./components/Hero"
import Projects from "./components/projects/Projects"
import Skills from "./components/skills/Skills"

// Main App Component
const Landing = () => {
    const { darkMode, setActiveSection, activeSection } = useThemeContext()
    return (
        <main className="container w-9/10 mx-auto px-4 pb-12">
            {activeSection === "commands" ? (<Commands />) : (<>
                {/* Hero Section */}
                < Hero darkMode={darkMode} setActiveSection={setActiveSection} />

                {/*About Section */}
                <About darkMode={darkMode} />

                {/*Skills Section */}
                <Skills darkMode={darkMode} />

                {/*Projects Section */}
                <Projects darkMode={darkMode} />

                {/*Experience Section */}
                <Experience darkMode={darkMode} />

                {/*Contact Section */}
                <Contact darkMode={darkMode} />
            </>
            )}
        </main>
    )
}
export default Landing
