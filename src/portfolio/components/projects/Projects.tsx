import ProjectCard from "@/projects/Components/ProjectCard";
import { projects } from "@/data/ProjectData";
import LazySection from "@/components/LazySection";
import FadeInDown from "@/components/FramerAnimation";
import Button from "@/components/Button";
import SectionIcon from "@/components/SectionIcon";
import { ArrowRight, FolderGit2 } from "lucide-react";
interface projectProps {
  darkMode: boolean
}

const Projects = ({ darkMode }: projectProps) => {
  return (
    <section id="projects" className="py-6 md:py-10">
      <LazySection>
        <div className="text-center mb-6 md:mb-8">
          <FadeInDown className="mb-3">
            <div className="flex items-end justify-center gap-3">
              <SectionIcon icon={FolderGit2} />
              <h2
                className={`text-3xl md:text-4xl font-bold ${darkMode ? "text-white" : "text-gray-900"
                  }`}
              >
                Featured{" "}
                <span
                  className={darkMode ? "text-blue-400" : "text-blue-600"}
                >
                  Projects
                </span>
              </h2>
            </div>
          </FadeInDown>
          <FadeInDown delay={0.2}>
            <p
              className={`text-base ${darkMode ? "text-gray-400" : "text-gray-600"
                } max-w-2xl mx-auto`}
            >
              A curated collection of innovative projects crafted using modern frameworks, scalable design patterns, and performance-focused solutions.
            </p>
          </FadeInDown>
        </div>

        <div className="px-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.slice(0, 4).map((project, index) => (
            <div key={project.id} className={`h-full${index === 3 ? " xl:hidden" : ""}`}>
              <ProjectCard darkMode={darkMode} project={project} />
            </div>
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