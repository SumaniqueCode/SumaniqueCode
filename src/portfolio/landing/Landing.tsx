import { useThemeContext } from "../../ThemeContext"
import About from "./components/about/About"
import Hero from "./components/Hero"

// Main App Component
const Landing = () => {
    const { darkMode, setActiveSection } = useThemeContext()
    return (
        <main className="container w-9/10 mx-auto px-4 pb-12">
            {/* Hero Section */}
            <Hero darkMode={darkMode} setActiveSection={setActiveSection} />

            {/*About Section */}
            <About darkMode={darkMode} />
        </main>
    )
}
export default Landing
