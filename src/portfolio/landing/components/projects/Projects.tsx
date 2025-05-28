import ProjectCard from "./Components/ProjectCard";
interface projectProps {
  darkMode: boolean
}

const Projects = ({ darkMode }: projectProps) => {
  const projects = [
    {
      id: "1",
      name: "Share Insight Nepal",
      description:
        "A Nepal stock market management web app that aims to help investors manage their share portfolio more effectively by optimizing returns while minimizing risks.",
      image: "/images/projects/shareinsightnepal/landingpage.jpg",
      techs: ["Laravel", "PHP", "Tailwind", "MySQL"],
      codelink: "https://github.com/SumaniqueCode/shareInsightNepal",
      livelink: "https://shareinsightnepal.up.railway.app",
    },
    {
      id: "2",
      name: "Daily Repo",
      description:
        "A collaborative task management application featuring drag-and-drop interfaces, real-time updates, and team collaboration tools. Built with React and Laravel.",
      image: "/images/projects/dailyrepo/dashboard.jpg",
      techs: ["React", "TypeScript", "Axios", "Redux", "Tailwind", "Laravel"],
      codelink: "https://github.com/SumaniqueCode/Daily-report-react-laravel",
      livelink: "#",
    },
  ];


  return (
    <section id="projects" className="py-4">
      <h2 className={`text-3xl font-bold mb-6 text-center ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
        Featured Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard darkMode={darkMode} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects