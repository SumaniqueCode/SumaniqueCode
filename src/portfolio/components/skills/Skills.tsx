import { skills } from "../../../data/SkillsData";
import LazySection from "../../../global/LazySection";
import SkillCard from "./components/SkillCard";

interface SkillsProps {
    darkMode: boolean;
}

const Skills = ({ darkMode }: SkillsProps) => {
    return (
        <section id="skills" className="pt-4 pb-8 relative overflow-hidden">
            <LazySection>
                <div className="relative z-10">
                    {/* Section Header */}
                    <div className="text-center mb-2 md:mb-8">
                        <h2
                            className={`text-3xl md:text-4xl font-bold mb-1 md:mb-4 ${darkMode ? "text-white" : "text-gray-900"
                                }`}
                            style={{ animation: "fadeInDown 0.6s ease-out" }}
                        >
                            Technical{" "}
                            <span
                                className={`bg-gradient-to-r ${darkMode
                                    ? "from-blue-400 to-purple-400"
                                    : "from-blue-600 to-purple-600"
                                    } bg-clip-text text-transparent`}
                            >
                                Skills
                            </span>
                        </h2>
                        <p
                            className={`text-md md:text-lg ${darkMode ? "text-gray-400" : "text-gray-600"
                                } max-w-2xl mx-auto`}
                            style={{ animation: "fadeInUp 0.6s ease-out 0.2s both" }}
                        >
                            A showcase of technologies and tools I work with to build modern
                            web applications
                        </p>
                    </div>

                    {/* Skills Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto">
                        {skills.map((skill, index) => (
                            <SkillCard
                                key={skill.id}
                                darkMode={darkMode}
                                skill={skill}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </LazySection>
        </section>
    );
};

export default Skills;