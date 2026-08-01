import ProfileWithShinyBorder from './ProfileWithShinyBorder'
import { optimizedPp1, optimizedPpbg1 } from '@/assets/images/logos'
import Button from '@/components/Button'
import { Github, Linkedin, Mail, UserRound } from 'lucide-react'
import { aboutBio } from '@/data/AboutData'
import SectionIcon from '@/components/SectionIcon'
import FramerAnimation from '@/components/FramerAnimation'

interface aboutProps {
    darkMode: boolean
}
const About = ({ darkMode }: aboutProps) => {
    return (
        <section id="about" className="py-6 md:py-10">
            {/* `amount: 1` keeps this parked until the whole heading is on screen,
                which only happens once the hero has been scrolled past - so About
                never starts while the hero is still coming in. The body follows on
                a delay so the order holds if both land in view together. */}
            <FramerAnimation iy={30} amount={1} delay={0.1}>
                <div className="flex items-end justify-center gap-3 mb-2 md:mb-3">
                    <SectionIcon icon={UserRound} />
                    <h2 className={`text-3xl md:text-4xl font-bold ${darkMode ? "text-white" : "text-gray-900"}`}
                    >
                        About{" "}
                        <span
                            className={darkMode ? "text-blue-400" : "text-blue-600"}
                        >
                            Me
                        </span>
                    </h2>
                </div>
            </FramerAnimation>
            <FramerAnimation iy={30} amount={0.35} delay={0.4}>
                <div className="flex flex-col md:flex-row gap-2 md:gap-10 items-center">
                    <ProfileWithShinyBorder darkMode={darkMode} background={optimizedPpbg1} profile={optimizedPp1} />

                    <div className="md:w-2/3" >
                        {aboutBio.map((paragraph, index) => (
                            <p key={index} className="text-md md:text-lg mb-3 md:mb-4">
                                {paragraph}
                            </p>
                        ))}
                        <div className="flex flex-wrap gap-4 mt-5 md:mt-6">
                            <Button
                                variant="outlined"
                                href="https://github.com/SumaniqueCode"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Github className="w-4 h-4 text-purple-500" aria-hidden="true" />
                                GitHub
                            </Button>
                            <Button
                                variant="outlined"
                                href="https://www.linkedin.com/in/suman-regmi-0b2440244/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Linkedin className="w-4 h-4 text-blue-500" aria-hidden="true" />
                                LinkedIn
                            </Button>
                            <Button
                                variant="outlined"
                                href="mailto:helpmeforhelp@gmail.com"
                            >
                                <Mail className="w-4 h-4 text-blue-600" aria-hidden="true" />
                                Email
                            </Button>
                        </div>
                    </div>
                </div>
            </FramerAnimation>
        </section>
    )
}

export default About