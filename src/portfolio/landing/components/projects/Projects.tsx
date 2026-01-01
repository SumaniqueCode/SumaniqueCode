import { Link } from "react-router-dom";
import ProjectCard from "../../../../projects/Components/ProjectCard";
import { projects } from "../../../../projects/ProjectData";
interface projectProps {
  darkMode: boolean
}

const Projects = ({ darkMode }: projectProps) => {
  return (
   <section id="projects" className="py-4">
      <h2 className={`text-3xl font-bold mb-6 text-center ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
        Featured Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.slice(0, 3).map((project) => (
          <ProjectCard key={project.id} darkMode={darkMode} project={project} />
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <Link
          to={"/projects"}
          className={`inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-lg transition-colors ${
            darkMode
              ? 'bg-blue-600 hover:bg-blue-700 text-white'
              : 'bg-blue-600 hover:bg-blue-700 text-white'
          }`}
        >
          View All Projects
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </section>
  )
}

export default Projects