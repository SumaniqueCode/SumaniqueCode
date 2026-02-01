import LazySection from "../../../../global/LazySection";

interface SkillCardProps {
  darkMode: boolean;
  skill: {
    id: number;
    name: string;
    techs: Array<{
      name: string;
      logo: string;
    }>;
    iconClass: string;
    color: string;
    gradient: string;
  };
  index: number;
}

const SkillCard = ({ darkMode, skill, index }: SkillCardProps) => {
  return (
    <LazySection>
      <div
        className={`h-full group relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-105 ${darkMode ? 'bg-gray-800/50' : 'bg-white'
          } backdrop-blur-sm border ${darkMode ? 'border-gray-700' : 'border-gray-200'
          } shadow-xl hover:shadow-2xl`}
        style={{ animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`, }}
      >
        {/* Gradient Background on Hover */}
        <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${skill.gradient}`} />

        {/* Animated Border */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden">
          <div
            className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
            style={{
              background: `linear-gradient(45deg, transparent 30%, ${skill.color}20 50%, transparent 70%)`,
              animation: 'shimmer 3s infinite',
            }}
          />
        </div>

        <div className="relative p-4 md:p-6">
          {/* Icon with Animation */}
          <div className="mb-1 md:mb-3 flex items-center justify-between">
            <div className={`w-10 h-10 rounded-xl ${skill.gradient} flex items-center justify-center transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-lg`} >
              <i className={`${skill.iconClass} text-white text-xl`} aria-hidden="true" />
            </div>

            {/* Title */}
            <h3
              className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'
                }`}
            >
              {skill.name}
            </h3>

            {/* Tech Count Badge */}
            <div
              className={`px-2 py-1 rounded-full text-xs font-semibold ${darkMode
                ? 'bg-gray-700/50 text-gray-300'
                : 'bg-gray-100 text-gray-600'
                }`}
            >
              {skill.techs.length} skills
            </div>
          </div>

          <LazySection>
            {/* Tech Stack with Images */}
            <div className="md:space-y-1">
              {skill.techs.map((tech, techIndex) => (
                <div
                  key={tech.name}
                  className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-300 ${darkMode
                    ? 'hover:bg-gray-700/50'
                    : 'hover:bg-gray-50'
                    } group/tech cursor-pointer`}
                  style={{ animation: `slideInLeft 0.5s ease-out ${index * 0.1 + techIndex * 0.05}s both` }}
                >
                  {/* Tech Logo Image */}
                  <div className="relative w-8 h-8 flex-shrink-0 transform group-hover/tech:scale-110 transition-transform duration-300">
                    <img
                      loading='lazy'
                      draggable={false}
                      src={tech.logo}
                      alt={`${tech.name} logo`}
                      className="w-full h-full object-contain rounded"
                      onError={(e) => {
                        // Fallback to icon if image fails to load
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                    {/* Fallback Icon */}
                    <div
                      className={`hidden w-full h-full rounded ${skill.gradient} items-center justify-center`}
                    >
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Tech Name */}
                  <span
                    className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'
                      } group-hover/tech:translate-x-1 transition-transform duration-300`}
                  >
                    {tech.name}
                  </span>

                  {/* Progress Indicator */}
                  <div className="ml-auto w-2 h-2 rounded-full bg-gradient-to-r from-green-400 to-green-600 opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </LazySection>

          {/* Bottom Accent Line */}
          <div className={`hidden md:block mt-4 h-1 rounded-full ${skill.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
        </div>
      </div>
    </LazySection>
  );
};

export default SkillCard;