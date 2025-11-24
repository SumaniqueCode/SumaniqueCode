import SkillCard from "./components/SkillCard";

interface skillProps {
    darkMode: boolean
}

const Skills = ({ darkMode }: skillProps) => {
    const skills = [
        {
            id: 1,
            name: "Frontend Development",
            techs: ["React JS", "Redux", "TypeScript", "MUI", "Next.js", "Tailwind", "Bootstrap"],
            iconClass: "fa fa-desktop",
        },
        {
            id: 2,
            name: "Backend Development",
            techs: ["Laravel", "Django", "RESTful APIs", "PostgreSQL", "Firebase"],
            iconClass: "fa-solid fa-database",

        },
        {
            id: 3,
            name: "Tools & Others",
            techs: ["Git & GitHub", "Python", "Java", "CI/CD", "UI/UX", "Figma", "Adobe Softwares"],
            iconClass: "fa fa-cog",
        },
    ];

    return (
        <section id="skills" className="py-4">
            <h2 className={`text-3xl font-bold mb-4 md:mb-6 text-center ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                Technical Skills
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {skills.map((skill) => (
                    <SkillCard key={skill.id} darkMode={darkMode} skill={skill} />
                ))}
            </div>
        </section>
    );
};

export default Skills;
