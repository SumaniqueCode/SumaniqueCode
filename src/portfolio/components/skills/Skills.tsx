import LazySection from "../../../global/LazySection";
import SkillCard from "./components/SkillCard";

interface SkillsProps {
    darkMode: boolean;
}

const Skills = ({ darkMode }: SkillsProps) => {
    const skills = [
        {
            id: 1,
            name: "Frontend Tools",
            techs: [
                {
                    name: "React JS",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
                },
                {
                    name: "Redux",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
                },
                {
                    name: "TypeScript",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
                },
                {
                    name: "MUI",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
                },
                {
                    name: "Next.js",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
                },
                {
                    name: "Tailwind",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
                },
                {
                    name: "Bootstrap",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
                },
            ],
            iconClass: "fa fa-desktop",
            color: "#3B82F6",
            gradient: "bg-gradient-to-br from-blue-500 to-cyan-500",
        },
        {
            id: 2,
            name: "Backend Tools",
            techs: [
                {
                    name: "Laravel",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
                },
                {
                    name: "Django",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg",
                },
                {
                    name: "RESTful APIs",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
                },
                {
                    name: "PostgreSQL",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
                },
                {
                    name: "MySQL",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
                },
                {
                    name: "Firebase",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
                },
            ],
            iconClass: "fa-solid fa-database",
            color: "#8B5CF6",
            gradient: "bg-gradient-to-br from-purple-500 to-pink-500",
        },
        {
            id: 3,
            name: "Other Tools",
            techs: [
                {
                    name: "Git & GitHub",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
                },
                {
                    name: "Python",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
                },
                {
                    name: "Java",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
                },
                {
                    name: "CI/CD",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg",
                },
                {
                    name: "UI/UX",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sketch/sketch-original.svg",
                },
                {
                    name: "Figma",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
                },
                {
                    name: "Adobe Softwares",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg",
                },
            ],
            iconClass: "fa fa-cog",
            color: "#10B981",
            gradient: "bg-gradient-to-br from-emerald-500 to-teal-500",
        },
    ];

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