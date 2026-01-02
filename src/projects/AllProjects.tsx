import { useEffect } from "react";
import { useThemeContext } from "../ThemeContext";
import ProjectCard from "./Components/ProjectCard"
import { projects } from "./ProjectData"

const AllProjects = () => {
    const sideNavs = [''];
    const { darkMode,setSideNavs } = useThemeContext()
    useEffect(()=>(
        setSideNavs(sideNavs)
    ),[]);  return (
    <section className={'min-h-screen w-9/10 mx-auto py-6 px-4'}>
      <h2 className={`text-3xl font-bold mb-6 text-center ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
        All Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} darkMode={darkMode} project={project} />
        ))}
      </div>

    </section>
  )
}

export default AllProjects