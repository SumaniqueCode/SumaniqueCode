import { Code, Camera, Globe } from 'lucide-react';
import ExperienceCard from './components/ExperienceCard';

interface SkillProps {
  darkMode: boolean;
}


const Experience = ({ darkMode }: SkillProps) => {
  const experiences = [
    {
      id: 1,
      year: "2020",
      title: "Graphics Designer and IT Instructor",
      company: "Prime Cyber Cafe",
      location: "Kathmandu",
      description: "I worked as a graphics designer and instructed the workers on technical problems in Prime Cyber Cafe, Kathmandu. While working at there, I also learned the efficient way to interact with customers and the value of time.",
      icon: <Camera className={`h-6 w-6 ${darkMode ? 'text-purple-300' : 'text-purple-600'}`} />,
      skills: ["Graphics Design", "Customer Service", "IT Support"]
    },
    {
      id: 2,
      year: "2019 - Present",
      title: "Part-time Jobs",
      company: "Various Platforms",
      location: "Remote",
      description: "I have been working on different online platforms for a long time. I have also worked in development of few Web based and Android based applications. I have worked as a content creator on Youtube and blogger. I have also worked as a freelancer in different freelancing websites.",
      icon: <Globe className={`h-6 w-6 ${darkMode ? 'text-blue-300' : 'text-blue-600'}`} />,
      skills: ["Web Development", "Android Development", "Content Creation", "Freelancing"]
    },
    {
      id: 3,
      year: "2024",
      title: "Jr. FullStack Web Developer",
      company: "Hunchha Digital",
      location: "Itahari",
      description: "I worked as a Jr. Full stack web developer at Hunchha Digital, Itahari. My stacks were: Laravel (API, Sanctum, Socialite Package), React (Material UI, TypeScript, Redux, Axios).",
      icon: <Code className={`h-6 w-6 ${darkMode ? 'text-teal-300' : 'text-teal-600'}`} />,
      skills: ["Laravel", "React", "TypeScript", "Redux"]
    }
  ];

  return (
    <section id="experience" className='py-4' >
      <div className="container mx-auto">
        <h2 className={`text-3xl font-bold mb-12 text-center ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
          Professional Experience
        </h2>

        <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 mx-auto">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} darkMode={darkMode} exp={exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;