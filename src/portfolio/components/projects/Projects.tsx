import ProjectCard from "@/projects/Components/ProjectCard";
import { projects } from "@/data/ProjectData";
import LazySection from "@/components/LazySection";
import FadeInDown from "@/components/FramerAnimation";
import Button from "@/components/Button";
import { ArrowRight } from "lucide-react";
interface projectProps {
  darkMode: boolean
}

const Projects = ({ darkMode }: projectProps) => {
  return (
    <section id="projects" className="py-4">
      <LazySection>
        <div className="text-center mb-8">
          <FadeInDown className="mb-3">
            <h2
              className={`text-3xl md:text-4xl font-bold mb-3 ${darkMode ? "text-white" : "text-gray-900"
                }`}
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
          </FadeInDown>
          <FadeInDown delay={0.2} className="mb-3">
            <p
              className={`text-base ${darkMode ? "text-gray-400" : "text-gray-600"
                } max-w-2xl mx-auto`}
            >
              A curated collection of innovative projects crafted using modern frameworks, scalable design patterns, and performance-focused solutions.
            </p>
          </FadeInDown>
        </div>

        <div className="px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(0, 3).map((project) => (
            <ProjectCard key={project.id} darkMode={darkMode} project={project} />
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Button
            href="/projects"
            variant="primary"
          >
            View All Projects
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </LazySection>
    </section>
  )
}

export default Projects