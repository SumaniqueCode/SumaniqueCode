import { motion, Variants } from "framer-motion";
import type { SkillGroup } from "@/data/SkillsData";
import { staggerContainer, stackItem } from "@/components/motionVariants";

interface SkillCardProps {
  darkMode: boolean;
  skill: SkillGroup;
}

/* The card itself just fades in - the movement belongs to the tech rows below.
   The `show` state is inherited from the grid container in Skills.tsx, which
   staggers its children, so no per-card delay is needed here. */
const cardVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

/* Once the card is up, each tech (React, Django, ...) stacks into place. */
const techListVariants = staggerContainer(0.12, 0.2);
const techVariants = stackItem(36, -24);

const SkillCard = ({ darkMode, skill }: SkillCardProps) => {
  const Icon = skill.icon;
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`h-full group relative overflow-hidden rounded-2xl transition-shadow duration-500 ${darkMode ? 'bg-gray-800/50' : 'bg-white'
        } backdrop-blur-sm border ${darkMode ? 'border-gray-700' : 'border-gray-200'
        } shadow-xl hover:shadow-2xl`}
    >
      {/* Gradient Background on Hover */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${skill.gradient}`} />

      {/* Animated Border */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden">
        <div
          className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-0`}
          style={{
            background: `linear-gradient(45deg, transparent 30%, ${skill.color}20 50%, transparent 70%)`,
            animation: 'shimmer 3s infinite',
          }}
        />
      </div>

      <div className="relative p-4 md:p-5">
        {/* Icon with Animation */}
        <div className="mb-2 md:mb-3 flex items-center justify-between">
          <div className={`w-10 h-10 rounded-xl ${skill.gradient} flex items-center justify-center transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-lg`} >
            <Icon className="text-white w-5 h-5" aria-hidden="true" />
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
            className={`px-2 py-0.5 rounded-full text-xs font-semibold  border-2 ${darkMode
              ? 'bg-gray-700/50 text-white border-white'
              : 'bg-white text-blue-600 border-blue-500'
              }`}
          >
            {skill.techs.length} skills
          </div>
        </div>

        {/* Tech Stack with Images */}
        <motion.div className="space-y-0.5 md:space-y-1" variants={techListVariants}>
          {skill.techs.map((tech) => (
            <motion.div
              key={tech.name}
              variants={techVariants}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors duration-300 ${darkMode
                ? 'hover:bg-gray-700/50'
                : 'hover:bg-gray-50'
                } group/tech cursor-pointer`}
            >
              {/* Tech Logo Image */}
              <div className="relative w-8 h-8 flex-shrink-0 transform group-hover/tech:scale-110 transition-transform duration-300">
                <img
                  loading='lazy'
                  draggable={false}
                  src={tech.logo}
                  alt={`${tech.name} logo`}
                  className="w-full h-full object-contain rounded"
                  style={tech.invertOnDark && darkMode ? { filter: 'invert(1)' } : undefined}
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
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Accent Line */}
        <div className={`hidden md:block mt-4 h-1 rounded-full ${skill.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
      </div>
    </motion.div>
  );
};

export default SkillCard;
