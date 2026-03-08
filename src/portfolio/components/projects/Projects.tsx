import { Link } from "react-router-dom";
import ProjectCard from "../../../projects/Components/ProjectCard";
import { projects } from "../../../projects/ProjectData";
import LazySection from "../../../global/LazySection";
interface projectProps {
  darkMode: boolean
}

const Projects = ({ darkMode }: projectProps) => {
  return (
    <section id="projects" className="py-4">
      <LazySection>
        <div className="text-center mb-8">
          <h2
            className={`text-3xl md:text-4xl font-bold mb-3 ${darkMode ? "text-white" : "text-gray-900"
              }`}
            style={{ animation: "fadeInDown 0.6s ease-out" }}
          >
            Featured{" "}
            <span
              className={`bg-gradient-to-r ${darkMode
                ? "from-blue-400 to-purple-400"
                : "from-blue-600 to-purple-600"
                } bg-clip-text text-transparent`}
            >
              Projects
            </span>
          </h2>
          <p
            className={`text-base ${darkMode ? "text-gray-400" : "text-gray-600"
              } max-w-2xl mx-auto`}
            style={{ animation: "fadeInUp 0.6s ease-out 0.2s both" }}
          >
            A curated collection of innovative projects crafted using modern frameworks, scalable design patterns, and performance-focused solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(0, 3).map((project) => (
            <ProjectCard key={project.id} darkMode={darkMode} project={project} />
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Link
            to={"/projects"}
            className={`inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-lg transition-colors ${darkMode
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
      </LazySection>
    </section>
  )
}

export default Projects