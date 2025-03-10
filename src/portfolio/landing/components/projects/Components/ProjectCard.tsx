interface projectCardProps {
  darkMode: boolean
  project: {
    id: string
    name: string
    description: string
    image: string
    techs: string[]
    codelink: string
    livelink: string
  }
}

const ProjectCard = ({ darkMode, project }: projectCardProps) => {
  return (
    <div className="rounded-2xl overflow-hidden border-2 shadow-xl">
      <div className="relative pb-[56.25%]">
        <img
          src={project.image}
          alt={project.name}
          className="absolute m-1 w-[99%] h-[99%] object-cover border-b-4 rounded-2xl border-gray-400"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{project.name}</h3>
        <p className="mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techs.map((tech) => (
            <span
              key={tech}
              className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-gray-700 text-blue-100' : 'bg-gray-200 text-blue-800'}`}
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          <a
            href={project.codelink}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-1 px-4 py-2 rounded-md ${darkMode ? 'bg-blue-800 hover:bg-blue-900' : 'bg-blue-600 hover:bg-blue-700'} text-white`}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            Code
          </a>
          <a
            href={project.livelink}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-1 px-4 py-2 rounded-md ${darkMode ? 'bg-gray-700 hover:bg-gray-800' : 'bg-gray-200 hover:bg-gray-300'}`}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Live Demo
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard