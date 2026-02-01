import { useEffect } from "react";
import { useThemeContext } from "../ThemeContext";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Hero from "./components/Hero";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";

const Landing = () => {
  const sideNavs = ["about", "skills", "projects", "experience", "contact"];
  const { darkMode, setActiveSection, setSideNavs } = useThemeContext();

  useEffect(() => {
    setSideNavs(sideNavs);
  }, []);

  return (
    <main className="container w-9/10 mx-auto px-4 pb-12">
      <Hero darkMode={darkMode} setActiveSection={setActiveSection} />
        <About darkMode={darkMode} />
        <Skills darkMode={darkMode} />
        <Projects darkMode={darkMode} />
        <Experience darkMode={darkMode} />
        <Contact darkMode={darkMode} />
    </main>
  );
};

export default Landing;