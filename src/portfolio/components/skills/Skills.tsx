import { motion, Variants } from "framer-motion";
import { Code2 } from "lucide-react";
import { skills } from "@/data/SkillsData";
import LazySection from "@/components/LazySection";
import SectionIcon from "@/components/SectionIcon";
import SkillCard from "./components/SkillCard";

interface SkillsProps {
    darkMode: boolean;
}

/* Cards fade in one after another; the stacking movement itself happens on the
   tech rows inside each card (see SkillCard). */
const gridVariants: Variants = {
    hidden: {},
    show: { transition: { delayChildren: 0.15, staggerChildren: 0.25 } },
};

const Skills = ({ darkMode }: SkillsProps) => {
    return (
        <section id="skills" className="py-6 md:py-10 px-6 relative overflow-hidden">
            <div className="relative z-10">
                {/* Section Header */}
                <LazySection>
                    <div className="text-center mb-5 md:mb-8">
                        <div className="flex items-end justify-center gap-3 mb-2 md:mb-3">
                            <SectionIcon icon={Code2} />
                            <h2
                                className={`text-3xl md:text-4xl font-bold ${darkMode ? "text-white" : "text-gray-900"
                                    }`}
                            >
                                Technical{" "}
                                <span
                                    className={darkMode ? "text-blue-400" : "text-blue-600"}
                                >
                                    Skills
                                </span>
                            </h2>
                        </div>
                        <p
                            className={`text-md md:text-lg ${darkMode ? "text-gray-400" : "text-gray-600"
                                } max-w-2xl mx-auto`}
                        >
                            A showcase of technologies and tools I work with to build modern
                            web applications
                        </p>
                    </div>
                </LazySection>

                {/* Skills Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-5 mx-auto"
                    variants={gridVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.15 }}
                >
                    {skills.map((skill) => (
                        <SkillCard
                            key={skill.id}
                            darkMode={darkMode}
                            skill={skill}
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
