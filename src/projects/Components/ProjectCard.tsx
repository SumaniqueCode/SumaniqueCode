import { Link } from "react-router-dom";
import { Github, ExternalLink, ArrowRight, Code2 } from "lucide-react";
import { useState } from "react";
import LazySection from "../../components/LazySection";
import Picture, { PictureSource } from "../../components/Picture";
import Button from "../../components/Button";
import { handleProjectLink } from "../../utils/projectLinks";

interface ProjectCardProps {
  darkMode: boolean;
  project: {
    id: number;
    name: string;
    description: string;
    images: PictureSource[];
    thumbnail: PictureSource;
    techs: string[];
    codelink: string;
    livelink: string;
  };
}

const ProjectCard = ({ darkMode, project }: ProjectCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <LazySection className="h-full">
      <Link
        to={"/project/" + project.id}
        className={`group relative flex h-full flex-col overflow-hidden rounded-2xl transition-all duration-500 hover:scale-[1.02] ${darkMode ? "bg-gray-800/50 border-gray-700" : "bg-white border-gray-200"
          } backdrop-blur-sm border shadow-xl hover:shadow-2xl cursor-pointer`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Gradient Background on Hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />

        {/* Animated Border Effect */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden">
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-0"
            style={{
              background:
                "linear-gradient(45deg, transparent 30%, #3B82F620 50%, transparent 70%)",
              animation: "shimmer 3s infinite",
            }}
          />
        </div>

        {/* Image Container */}
        <div className="relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
          <div className="relative pb-[56.25%]">
            {/* Loading Skeleton */}
            {!imageLoaded && (
              <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700" />
            )}

            {/* Project Image */}
            <Picture
              draggable={false}
              loading="lazy"
              src={project.thumbnail}
              alt={project.name}
              onLoad={() => setImageLoaded(true)}
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${imageLoaded ? "opacity-100 scale-100" : "opacity-0 scale-110"
                } ${isHovered ? "scale-110" : "scale-100"}`}
            />

            {/* Overlay on Hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Quick Actions Overlay */}
            <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
              <a href={project.codelink} target="_blank" rel="noopener noreferrer" onClick={(e) => handleProjectLink(e, project.codelink, "Source code")}
                className="p-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110 shadow-lg"
                title="View Code"
                aria-label={`View source code for ${project.name}`}
              >
                <Github className="w-5 h-5 text-gray-900" aria-hidden="true" />
              </a>
              <a href={project.livelink} target="_blank" rel="noopener noreferrer" onClick={(e) => handleProjectLink(e, project.livelink, "Live demo")}
                className="p-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110 shadow-lg"
                title="Live Demo"
                aria-label={`View live demo for ${project.name}`}
              >
                <ExternalLink className="w-5 h-5 text-gray-900" aria-hidden="true" />
              </a>
            </div>

            {/* Tech Badge */}
            <div className="absolute top-3 left-3 flex items-center gap-2 px-3 py-1.5 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full shadow-lg">
              <Code2 className="w-4 h-4 text-blue-600" aria-hidden="true" />
              <span className="text-xs font-semibold text-gray-900">
                {project.techs.length} Technologies
              </span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="relative flex flex-1 flex-col p-4">
          {/* Project Title */}
          <h3 className={`text-xl font-bold mb-3 line-clamp-1 ${darkMode ? "text-white" : "text-gray-900"}`} >
            {project.name}
          </h3>

          {/* Description */}
          <LazySection>
            <p className={`text-sm leading-relaxed mb-4 line-clamp-3 ${darkMode ? "text-gray-300" : "text-gray-600"}`} >
              {project.description}
            </p>
          </LazySection>

          <LazySection>
            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-5">
              {project.techs.slice(0, 4).map((tech, index) => (
                <span
                  key={tech}
                  className={`px-3 py-1 rounded-lg text-xs font-medium transition-all duration-300 ${darkMode
                    ? "bg-blue-900/50 text-blue-300 hover:bg-blue-900"
                    : "bg-blue-100 text-blue-700 hover:bg-blue-200"
                    }`}
                  style={{
                    animation: `fadeInUp 0.4s ease-out ${index * 0.05}s both`,
                  }}
                >
                  {tech}
                </span>
              ))}
              {project.techs.length > 4 && (
                <span className={`px-3 py-1 rounded-lg text-xs font-medium ${darkMode ? "bg-[var(--color-secondary-dark)] text-gray-300" : "bg-[var(--color-secondary)] text-gray-700"}`}>
                  +{project.techs.length - 4}
                </span>
              )}
            </div>
          </LazySection>

          {/* Action Buttons */}
          <div className="mt-auto md:hidden flex items-center justify-between gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
            {/* Code & Live Links */}
            <div className="flex gap-2">
              <a href={project.codelink} target="_blank" rel="noopener noreferrer" onClick={(e) => handleProjectLink(e, project.codelink, "Source code")}
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium transition-all duration-300 hover:scale-105 bg-gray-100 hover:bg-gray-200 text-gray-700"
                title="View Source Code"
                aria-label={`View source code for ${project.name}`}
              >
                <Github className="w-4 h-4" aria-hidden="true" />
                <span className="hidden sm:inline">Code</span>
              </a>
              <a href={project.livelink} target="_blank" rel="noopener noreferrer" onClick={(e) => handleProjectLink(e, project.livelink, "Live demo")}
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium transition-all duration-300 hover:scale-105 bg-gray-100 hover:bg-gray-200 text-gray-700"
                title="View Live Demo"
                aria-label={`View live demo for ${project.name}`}
              >
                <ExternalLink className="w-4 h-4" aria-hidden="true" />
                <span className="hidden sm:inline">Demo</span>
              </a>
            </div>

            {/* View Details Indicator */}
            <Button variant="primary" className="text-xs">
              View Details
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>

        {/* Bottom Accent Line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      </Link>
    </LazySection>
  );
};

export default ProjectCard;