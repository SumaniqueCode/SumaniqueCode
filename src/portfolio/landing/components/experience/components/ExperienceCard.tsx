import { Briefcase, Calendar, MapPin } from "lucide-react";

interface experienceProps {
  darkMode: boolean;
  exp: {
    id: number;
    year: string;
    title: string;
    company: string;
    location: string;
    description: string;
    skills: string[];
    icon: React.ReactNode;
  }
}

const ExperienceCard = ({ darkMode, exp }: experienceProps) => {
  return (
    <div key={exp.id}
      className={`group relative overflow-hidden rounded-xl shadow-lg transition-all transform hover:-translate-y-1 hover:shadow-xl `}
    >
      <div className="absolute top-0 left-0 h-full w-2 bg-gradient-to-b from-blue-500 via-purple-500 to-teal-500"></div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className={`flex items-center justify-center h-12 w-12 rounded-lg mr-4 ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
              {exp.icon}
            </div>
            <div>
              <h3 className="text-xl font-bold">{exp.title}</h3>
              <p>
                <Briefcase className="w-4 h-4 inline mr-1" />
                {exp.company}
              </p>
            </div>
          </div>
          <div className={`px-3 py-1 rounded-full text-sm font-medium ${darkMode ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-800'}`}>
            <Calendar className="w-4 h-4 inline mr-1" />
            {exp.year}
          </div>
        </div>

        <div className={`flex items-center mb-4 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          <MapPin className="w-4 h-4 mr-1" />
          <span>{exp.location}</span>
        </div>

        <p className={`mb-6`}>
          {exp.description}
        </p>

        <div className="flex flex-wrap">
          {exp.skills.map((skill, i) => (
            <span key={i}
              className={`m-1 px-3 py-1 text-xs font-medium rounded-full transition-all 
            ${darkMode ? 'bg-gray-700 text-gray-300 group-hover:bg-gray-600' : 'bg-gray-200 text-gray-700 group-hover:bg-gray-300'}`}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div
        className={`absolute bottom-0 left-0 w-full h-1 transition-all duration-500 transform ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}
      >
        <div
          className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 w-0 group-hover:w-full transition-all duration-500"
        ></div>
      </div>
    </div>
  )
}

export default ExperienceCard