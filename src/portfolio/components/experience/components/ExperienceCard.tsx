import { Briefcase, Calendar, MapPin, ChevronRight } from "lucide-react";
import LazySection from "../../../../global/LazySection";

interface ExperienceProps {
  darkMode: boolean;
  exp: {
    id: number;
    year: string;
    title: string;
    company: string;
    location: string;
    description: string;
    achievements: string[];
    skills: Array<{
      name: string;
      logo: string;
    }>;
    gradient: string;
    color: string;
    companyLogo: string;
  };
  index: number;
}

const ExperienceCard = ({ darkMode, exp, index }: ExperienceProps) => {
  return (
    <LazySection>
      <div className="w-full" style={{ animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both`, }}>
        {/* Card */}
        <div
          className={`group relative overflow-hidden rounded-2xl shadow-xl transition-all duration-500 hover:scale-[1.02] ${darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-200'
            } backdrop-blur-sm border hover:shadow-2xl`}
        >
          {/* Gradient Background on Hover */}
          <div
            className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${exp.gradient}`}
          />

          {/* Animated Border Effect */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden">
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: `linear-gradient(45deg, transparent 30%, ${exp.color}20 50%, transparent 70%)`,
                animation: 'shimmer 3s infinite',
              }}
            />
          </div>

          {/* Side Accent Line */}
          <div className={`absolute left-0 top-0 w-1 h-full ${exp.gradient}`}></div>

          <div className="relative p-6">
            {/* Header Section */}
            <div className="flex items-start gap-4 mb:1 md:mb-4">
              {/* Company Logo */}
              <div className={`w-10 md:w-14 h-10 md:h-14 rounded-lg md:rounded-xl ${exp.gradient} p-0.5 md:p-1 flex items-center justify-center transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-500 shadow-lg flex-shrink-0`}>
                <img
                  draggable={false}
                  loading="lazy"
                  src={exp.companyLogo}
                  alt={`${exp.company} logo`}
                  className="w-full h-full object-contain rounded-xl"
                />
              </div>

              {/* Title, Company, Location */}
              <div className="flex-1 min-w-0">
                <h3 className={` text-md md:text-xl font-bold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {exp.title}
                </h3>
                <div className={`flex items-center gap-1.5 mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <Briefcase className="w-3.5 h-3.5 flex-shrink-0" />
                  <span className="font-medium text-sm">{exp.company}</span>
                </div>
                <div className={`flex items-center gap-1.5 text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>{exp.location}</span>
                  <span className="mx-1">•</span>
                  <Calendar className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>{exp.year}</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className={`mb-2 md:mb-4 text-sm md:leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {exp.description}
            </p>

            {/* Achievements */}
            <div className="mb-4">
              <h4 className={`text-xs font-semibold mb-1 md:mb-2 uppercase tracking-wide ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Key Achievements
              </h4>
              <ul className="md:space-y-1.5">
                {exp.achievements.map((achievement, i) => (
                  <li
                    key={i}
                    className={`flex items-start gap-2 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'} group/achievement`}
                    style={{
                      animation: `fadeInLeft 0.4s ease-out ${i * 0.08}s both`,
                    }}
                  >
                    <ChevronRight className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 transform group-hover/achievement:translate-x-1 transition-transform duration-300 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                    <span className="leading-snug">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Skills with Logos */}
            <div>
              <h4 className={`text-xs font-semibold mb-2 uppercase tracking-wide ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Technologies
              </h4>
              <LazySection>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <div
                      key={i}
                      className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg transition-all duration-300 ${darkMode
                        ? 'bg-gray-700/50 hover:bg-gray-700 text-gray-300'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                        } group/skill cursor-pointer`}
                      style={{
                        animation: `fadeInUp 0.4s ease-out ${i * 0.04}s both`,
                      }}
                    >
                      <img
                        src={skill.logo}
                        alt={`${skill.name} logo`}
                        className="w-4 h-4 object-contain transform group-hover/skill:scale-110 transition-transform duration-300"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                      <span className="text-xs font-medium">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </LazySection>
            </div>

            {/* Bottom Accent Line */}
            <div className={`hidden md:block mt-4 h-1 rounded-full ${exp.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
          </div>
        </div>
      </div>
    </LazySection>
  );
};

export default ExperienceCard;