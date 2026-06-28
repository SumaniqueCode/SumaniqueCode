import ProfileWithShinyBorder from './ProfileWithShinyBorder'
import { optimizedPp1, optimizedPpbg1 } from '@/assets/images/logos'
import Button from '@/components/Button'
import { Github, Linkedin, Mail } from 'lucide-react'

interface aboutProps {
    darkMode: boolean
}
const About = ({ darkMode }: aboutProps) => {
    return (
        <section id="about" className="">
            <div className="text-center">
                <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}
                >
                    About{" "}
                    <span
                        className={`bg-gradient-to-r ${darkMode
                            ? "from-blue-400 to-purple-400"
                            : "from-blue-600 to-purple-600"
                            } bg-clip-text text-transparent`}
                    >
                        Me
                    </span>
                </h2>
            </div>
            <div className="flex flex-col md:flex-row gap-2 md:gap-12 items-center">
                <ProfileWithShinyBorder darkMode={darkMode} background={optimizedPpbg1} profile={optimizedPp1} />

                <div className="md:w-2/3" >
                    <p className=" text-md md:text-lg mb-2 md:mb-4 lg:mb-6">
                        Hello! I'm a passionate full-stack developer with 4 years of experience building web applications.
                        I specialize in React, Laravel, Django and other modern web technologies as per the requirements.
                        My journey in software development started during my bachelor in computer application studies,
                        and I've been hooked on creating elegant solutions to complex problems ever since.
                    </p>
                    <p className="text-md md:text-lg mb-2 md:mb-4 lg:mb-6">
                        I believe in writing clean, maintainable code and staying up-to-date with the latest industry trends.
                        When I am not coding, you can find me exploring new technologies or helping others learn and solve the problems they encounter.
                    </p>
                    <div className="flex flex-wrap gap-4 mt-4 md:mt-8">
                        <Button
                            variant="outlined"
                            href="https://github.com/SumaniqueCode"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Github className="w-4 h-4 text-purple-500" />
                            GitHub
                        </Button>
                        <Button
                            variant="outlined"
                            href="https://www.linkedin.com/in/suman-regmi-0b2440244/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Linkedin className="w-4 h-4 text-blue-500" />
                            LinkedIn
                        </Button>
                        <Button
                            variant="outlined"
                            href="mailto:helpmeforhelp@gmail.com"
                        >
                            <Mail className="w-4 h-4 text-blue-600" />
                            Email
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About