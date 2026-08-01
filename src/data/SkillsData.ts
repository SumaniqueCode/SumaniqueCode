import { bootstrapIcon, djangoIcon, dockerIcon, figmaIcon, firebaseIcon, gitIcon, githubactionsIcon, javaIcon, laravelIcon, materialuiIcon, mysqlIcon, nextjsIcon, photoshopIcon, postgresqlIcon, postmanIcon, pythonIcon, reactIcon, redisIcon, reduxIcon, shadcnuiIcon, sketchIcon, tailwindcssIcon, typescriptIcon } from "@/assets/icons/devicons";
import { Monitor, Database, Wrench, LucideIcon } from "lucide-react";

export interface SkillTech {
    name: string;
    logo: string;
    /** Set for monochrome (black) marks so they stay visible on dark backgrounds. */
    invertOnDark?: boolean;
}

export interface SkillGroup {
    id: number;
    name: string;
    techs: SkillTech[];
    icon: LucideIcon;
    color: string;
    gradient: string;
}

export const skills: SkillGroup[] = [
    {
        id: 1,
        name: "Frontend Tools",
        techs: [
            {
                name: "React JS",
                logo: reactIcon,
            },
            {
                name: "Redux",
                logo: reduxIcon,
            },
            {
                name: "TypeScript",
                logo: typescriptIcon,
            },
            {
                name: "MUI",
                logo: materialuiIcon,
            },
            {
                name: "Next.js",
                logo: nextjsIcon,
            },
            {
                name: "Tailwind",
                logo: tailwindcssIcon,
            },
            {
                name: "shadcn/ui",
                logo: shadcnuiIcon,
                // Monochrome black mark - needs inverting to stay visible in dark mode.
                invertOnDark: true,
            },
            {
                name: "Bootstrap",
                logo: bootstrapIcon,
            },
        ],
        icon: Monitor,
        color: "#3B82F6",
        gradient: "bg-gradient-to-br from-blue-500 to-cyan-500",
    },
    {
        id: 2,
        name: "Backend Tools",
        techs: [
            {
                name: "Laravel",
                logo: laravelIcon,
            },
            {
                name: "Django",
                logo: djangoIcon,
            },
            {
                name: "RESTful APIs",
                logo: postmanIcon,
            },
            {
                name: "PostgreSQL",
                logo: postgresqlIcon,
            },
            {
                name: "MySQL",
                logo: mysqlIcon
            },
            {
                name: "Redis",
                logo: redisIcon,
            },
            {
                name: "Firebase",
                logo: firebaseIcon,
            },
        ],
        icon: Database,
        color: "#8B5CF6",
        gradient: "bg-gradient-to-br from-purple-500 to-pink-500",
    },
    {
        id: 3,
        name: "Other Tools",
        techs: [
            {
                name: "Git & GitHub",
                logo: gitIcon,
            },
            {
                name: "Python",
                logo: pythonIcon,
            },
            {
                name: "Java",
                logo: javaIcon,
            },
            {
                name: "Docker",
                logo: dockerIcon,
            },
            {
                name: "CI/CD",
                logo: githubactionsIcon,
            },
            {
                name: "UI/UX",
                logo: sketchIcon,
            },
            {
                name: "Figma",
                logo: figmaIcon,
            },
            {
                name: "Adobe Softwares",
                logo: photoshopIcon,
            },
        ],
        icon: Wrench,
        color: "#10B981",
        gradient: "bg-gradient-to-br from-emerald-500 to-teal-500",
    },
];