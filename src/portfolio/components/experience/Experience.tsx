import { experiences } from '../../../data/ExperienceData';
import LazySection from '../../../global/LazySection';
import ExperienceCard from './components/ExperienceCard';

interface ExperienceProps {
  darkMode: boolean;
}

const Experience = ({ darkMode }: ExperienceProps) => {
  return (
    <section id="experience" className=' pt-4 pb-12 relative overflow-hidden'>
      <LazySection>
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 left-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
        </div>

        <div className="container mx-auto relative z-10 px-4">
          {/* Section Header */}
          <div className="text-center mb-8">
            <h2
              className={`text-3xl md:text-4xl font-bold mb-3 ${darkMode ? "text-white" : "text-gray-900"
                }`}
              style={{ animation: "fadeInDown 0.6s ease-out" }}
            >
              Professional{" "}
              <span
                className={`bg-gradient-to-r ${darkMode
                  ? "from-blue-400 to-purple-400"
                  : "from-blue-600 to-purple-600"
                  } bg-clip-text text-transparent`}
              >
                Experience
              </span>
            </h2>
            <p
              className={`text-base ${darkMode ? "text-gray-400" : "text-gray-600"
                } max-w-2xl mx-auto`}
              style={{ animation: "fadeInUp 0.6s ease-out 0.2s both" }}
            >
              My journey building innovative web solutions across different roles and companies
            </p>
          </div>

          {/* Experience Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
            {experiences.map((exp, index) => (
              <ExperienceCard
                key={exp.id}
                darkMode={darkMode}
                exp={exp}
                index={index}
              />
            ))}
          </div>
        </div>
      </LazySection>
    </section>
  );
};

export default Experience;