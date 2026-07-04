import { useEffect } from "react";
import { useThemeContext } from "../ThemeContext";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Hero from "./components/Hero";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import SEO from "@/components/SEO";

const Landing = () => {
  const sideNavs = ["about", "skills", "projects", "experience", "contact"];
  const { darkMode, setActiveSection, setSideNavs } = useThemeContext();

  useEffect(() => {
    setSideNavs(sideNavs);
  }, []);

  return (
    <div className="container w-9/10 mx-auto px-2 md:px-4 pb-12">
      <SEO
        title="Suman Regmi | Full Stack Developer"
        description="Full Stack Web Developer specializing in React, Django, and Laravel. Explore professional experience, projects, and web development command references."
        path="/home"
        type="profile"
      />
      <Hero darkMode={darkMode} setActiveSection={setActiveSection} />
        <About darkMode={darkMode} />
        <Skills darkMode={darkMode} />
        <Projects darkMode={darkMode} />
        <Experience darkMode={darkMode} />
        <Contact darkMode={darkMode} />
    </div>
  );
};

export default Landing;