import { useEffect } from "react";
import { useThemeContext } from "../ThemeContext";
import ProjectCard from "./Components/ProjectCard"
import { projects } from "../data/ProjectData"
import SEO from "@/components/SEO";

const AllProjects = () => {
  const sideNavs: string[] = [];
  const { darkMode, setSideNavs } = useThemeContext()
  useEffect(() => (
    setSideNavs(sideNavs)
  ), []); return (
    <section className={'min-h-screen w-9/10 mx-auto py-6 px-2 md:px-4'} >
      <SEO
        title="All Projects | Suman Regmi"
        description="Browse the full collection of web development projects by Suman Regmi, built with React, Django, Laravel, and other modern frameworks."
        path="/projects"
      />
      <h1 className={`text-3xl font-bold mb-6 text-center ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
        All Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} darkMode={darkMode} project={project} />
        ))}
      </div>
    </section>
  )
}

export default AllProjects