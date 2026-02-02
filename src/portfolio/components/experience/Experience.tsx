import LazySection from '../../../global/LazySection';
import ExperienceCard from './components/ExperienceCard';

interface ExperienceProps {
  darkMode: boolean;
}

const Experience = ({ darkMode }: ExperienceProps) => {
  const experiences = [
    {
      id: 1,
      year: "June 2025 - Oct 2025",
      title: "Python Django Full Stack Developer",
      company: "Digital Pathshala",
      location: "Itahari, Nepal",
      description: "Mentored junior developers and interns on Django REST Framework, building RESTful APIs with JWT authentication. Led development of Task Management and Blog Management systems using Django MVT architecture.",
      gradient: "bg-gradient-to-br from-green-500 to-emerald-600",
      color: "#10B981",
      companyLogo: "/images/companies/digital_pathshala.png",
      achievements: [
        "Mentored junior developers on Django REST Framework best practices",
        "Created RESTful APIs with JWT-based authentication",
        "Guided development of Task Management System using Django MVT",
        "Built Blog Management System with MySQL integration"
      ],
      skills: [
        {
          name: "Django",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg"
        },
        {
          name: "Python",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
        },
        {
          name: "React.js",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
        },
        {
          name: "MySQL",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
        },
        {
          name: "REST API",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg"
        }
      ]
    },
    {
      id: 2,
      year: "Aug 2023 - Feb 2024",
      title: "Jr. Full Stack Web Developer",
      company: "Hunchha Digital",
      location: "Kathmandu, Nepal",
      description: "Developed responsive web applications using Laravel and React.js. Implemented Leaflet map integration for geospatial data visualization and collaborated with designers to bring Figma designs to life.",
      gradient: "bg-gradient-to-br from-yellow-500 to-amber-600",
      color: "#faa21b",
      companyLogo: "/images/companies/hunchha_digital.png",
      achievements: [
        "Built Daily Report web application with React.js and Laravel",
        "Integrated Leaflet maps for geospatial data visualization",
        "Implemented Figma designs using Material UI",
        "Used Git for version control and team collaboration"
      ],
      skills: [
        {
          name: "Laravel",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg"
        },
        {
          name: "React",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
        },
        {
          name: "TypeScript",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
        },
        {
          name: "Redux",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
        },
        {
          name: "MUI",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg"
        },
        {
          name: "Git",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
        }
      ]
    },
    {
      id: 3,
      year: "2019 - Present",
      title: "Freelance Full Stack Developer",
      company: "Various Platforms",
      location: "Remote",
      description: "Delivered custom web applications using Python/Django and modern JavaScript frameworks. Created responsive and accessible user interfaces with focus on client requirements and user experience.",
      gradient: "bg-gradient-to-br from-purple-500 to-violet-600",
      color: "#7F00FF",
      companyLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/htmx/htmx-original.svg",
      achievements: [
        "Delivered web applications based on client requirements",
        "Built responsive and accessible user interfaces",
        "Worked with Django and JavaScript frameworks",
        "Managed multiple projects simultaneously"
      ],
      skills: [
        {
          name: "Python",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
        },
        {
          name: "Django",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg"
        },
        {
          name: "JavaScript",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
        },
        {
          name: "HTML5",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
        },
        {
          name: "CSS3",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
        }
      ]
    },
    {
      id: 4,
      year: "2020",
      title: "Graphics Designer and IT Instructor",
      company: "Prime Cyber Cafe",
      location: "Kathmandu",
      gradient: "bg-gradient-to-br from-blue-500 to-cyan-600",
      color: "#3B82F6",
      description: "I worked as a graphics designer and instructed the workers on technical problems in Prime Cyber Cafe, Kathmandu. While working at there, I also learned the efficient way to interact with customers and the value of time.",
      companyLogo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg',
      achievements: [
        "Use of Graphics Designing tools.",
        "Communication and resource management.",
        "Learned to mentor.",
        "Time management."
      ],
      skills: [
        { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
        { name: "Photoshop", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg" },
        { name: "Illustrator", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/illustrator/illustrator-original.svg" },
        { name: "Canva", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg" }
      ]
    },
  ];

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