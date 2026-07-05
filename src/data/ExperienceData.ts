import { canvaIcon, css3Icon, djangoIcon, figmaIcon, gitIcon, html5Icon, htmxIcon, illustratorIcon, javascriptIcon, laravelIcon, materialuiIcon, mysqlIcon, photoshopIcon, postgresqlIcon, postmanIcon, pythonIcon, reactIcon, redisIcon, reduxIcon, tailwindcssIcon, typescriptIcon } from "@/assets/icons/devicons";
import { optimizedGoretoxLogo, optimizedDigitalPathshalaLogo, optimizedHunchhaDigitalLogo } from "@/assets/images/companies";

export const experiences = [
    {
        id: 1,
        year: "Feb 2026 - Now",
        title: "React Django Full Stack Developer",
        type: "Remote",
        company: "GoretoX",
        location: "Virginia, United States",
        description: "Developing microservice-based web applications using React and Django, focusing on responsive design, performance, and SEO optimization.",
        gradient: "bg-gradient-to-br from-[#3B82F6] to-[#2563EB]",
        color: "#0041A7",
        companyLogo: optimizedGoretoxLogo,
        achievements: [
            "Developed React components using shadcn/ui and handled time-zone based logic.",
            "Built RESTful APIs with Django Rest Framework and PostgreSQL for storage.",
            "Implemented Token-based authentication, RBAC, and secure Stripe payment integrations.",
            "Optimized performance using Redis for caching and Celery for background task."
        ],
        skills: [
            {
                name: "React",
                logo: reactIcon
            },
            {
                name: "Django",
                logo: djangoIcon
            },
            {
                name: "Tailwind CSS",
                logo: tailwindcssIcon
            },
            {
                name: "PostgreSQL",
                logo: postgresqlIcon
            },
            {
                name: "Redis",
                logo: redisIcon
            }
        ]
    },
    {
        id: 2,
        year: "June 2025 - Oct 2025",
        title: "Python Django Full Stack Developer",
        type: "On-Site",
        company: "Digital Pathshala",
        location: "Itahari, Nepal",
        description: "Mentored junior developers and interns on Django REST Framework, building RESTful APIs with JWT authentication. Led development of Task Management and Blog Management systems using Django MVT architecture.",
        gradient: "bg-gradient-to-br from-green-500 to-emerald-600",
        color: "#10B981",
        companyLogo: optimizedDigitalPathshalaLogo,
        achievements: [
            "Mentored junior developers on Django REST Framework best practices",
            "Created RESTful APIs with JWT-based authentication",
            "Guided development of Task Management System using Django MVT",
            "Built Blog Management System with MySQL integration"
        ],
        skills: [
            {
                name: "Django",
                logo: djangoIcon
            },
            {
                name: "Python",
                logo: pythonIcon
            },
            {
                name: "React.js",
                logo: reactIcon
            },
            {
                name: "MySQL",
                logo: mysqlIcon
            },
            {
                name: "REST API",
                logo: postmanIcon
            }
        ]
    },
    {
        id: 3,
        year: "Aug 2023 - Feb 2024",
        title: "Jr. Full Stack Web Developer",
        type: "Hybrid",
        company: "Hunchha Digital",
        location: "Kathmandu, Nepal",
        description: "Developed responsive web applications using Laravel and React.js. Implemented Leaflet map integration for geospatial data visualization and collaborated with designers to bring Figma designs to life.",
        gradient: "bg-gradient-to-br from-yellow-500 to-amber-600",
        color: "#faa21b",
        companyLogo: optimizedHunchhaDigitalLogo,
        achievements: [
            "Built Daily Report web application with React.js and Laravel",
            "Integrated Leaflet maps for geospatial data visualization",
            "Implemented Figma designs using Material UI",
            "Used Git for version control and team collaboration"
        ],
        skills: [
            {
                name: "Laravel",
                logo: laravelIcon
            },
            {
                name: "React",
                logo: reactIcon
            },
            {
                name: "TypeScript",
                logo: typescriptIcon
            },
            {
                name: "Redux",
                logo: reduxIcon
            },
            {
                name: "MUI",
                logo: materialuiIcon
            },
            {
                name: "Git",
                logo: gitIcon
            }
        ]
    },
    {
        id: 4,
        year: "2019 - Present",
        title: "Freelance Full Stack Developer",
        type: "Remote",
        company: "Various Platforms",
        location: "Remote",
        description: "Delivered custom web applications using Python/Django and modern JavaScript frameworks. Created responsive and accessible user interfaces with focus on client requirements and user experience.",
        gradient: "bg-gradient-to-br from-purple-500 to-violet-600",
        color: "#7F00FF",
        companyLogo: htmxIcon,
        achievements: [
            "Delivered web applications based on client requirements",
            "Built responsive and accessible user interfaces",
            "Worked with Django and JavaScript frameworks",
            "Managed multiple projects simultaneously"
        ],
        skills: [
            {
                name: "Python",
                logo: pythonIcon
            },
            {
                name: "Django",
                logo: djangoIcon
            },
            {
                name: "JavaScript",
                logo: javascriptIcon
            },
            {
                name: "HTML5",
                logo: html5Icon
            },
            {
                name: "CSS3",
                logo: css3Icon
            }
        ]
    },
    {
        id: 5,
        year: "2020",
        title: "Graphics Designer and IT Instructor",
        type: "On-Site",
        company: "Prime Cyber Cafe",
        location: "Kathmandu",
        gradient: "bg-gradient-to-br from-blue-500 to-cyan-600",
        color: "#3B82F6",
        description: "I worked as a graphics designer and instructed the workers on technical problems in Prime Cyber Cafe, Kathmandu. While working at there, I also learned the efficient way to interact with customers and the value of time.",
        companyLogo: photoshopIcon,
        achievements: [
            "Use of Graphics Designing tools.",
            "Communication and resource management.",
            "Learned to mentor.",
            "Time management."
        ],
        skills: [
            { name: "Figma", logo: figmaIcon },
            { name: "Photoshop", logo: photoshopIcon },
            { name: "Illustrator", logo: illustratorIcon },
            { name: "Canva", logo: canvaIcon }
        ]
    },
];