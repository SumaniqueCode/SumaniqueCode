interface skillCardProps {
  darkMode: boolean;
  skill: {
    id: number;
    name: string;
    techs: string[];
    iconClass: string;
  }
}

const SkillCard = ({ darkMode, skill }: skillCardProps) => {
  return (
    <div className={`p-6 px-4 rounded-2xl shadow-xl border-b-2 border-l-2`}>
      <h3 className="text-lg md:text-xl font-semibold mb-4 flex items-center">
        {/* <svg className="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={skill.iconLink} />
        </svg> */}
        <i className={`mr-2 ${skill.iconClass}`} aria-hidden="true"></i>
        {skill.name}
      </h3>
      <ul className="space-y-2">
        {skill.techs.map((tech) => (
          <li key={tech} className="flex items-center">
            <svg className={`w-5 h-5 mr-2 ${darkMode ? 'text-green-400' : 'text-green-600'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            {tech}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SkillCard