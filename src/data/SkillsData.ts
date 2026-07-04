import { bootstrapIcon, djangoIcon, figmaIcon, firebaseIcon, gitIcon, githubactionsIcon, javaIcon, laravelIcon, materialuiIcon, mysqlIcon, nextjsIcon, photoshopIcon, postgresqlIcon, postmanIcon, pythonIcon, reactIcon, reduxIcon, sketchIcon, tailwindcssIcon, typescriptIcon } from "@/assets/icons/devicons";
import { Monitor, Database, Wrench } from "lucide-react";

export const skills = [
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