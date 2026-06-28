import { useEffect, useState } from "react";
import { useThemeContext } from "@/ThemeContext";
import Button from "@/components/Button";

interface heroProps {
    darkMode: boolean,
    setActiveSection: (sectionId: string) => void
}

const Hero = ({ darkMode, setActiveSection }: heroProps) => {
    const techs = ['Laravel', 'React', 'Django', "MERN", "NEXT.js", "TypeScript", "MUI"]
    const [displayText, setDisplayText] = useState("");
    const [techIndex, setTechIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(true);
    const { scroller } = useThemeContext();

    const scrollToSection = (stringId: string) => {
        scroller(stringId);
        setActiveSection(stringId);
    }

    useEffect(() => {
        let timer: ReturnType<typeof setTimeout> | undefined;
        if (isTyping) {
            // Typing phase
            if (displayText.length < techs[techIndex].length) {
                timer = setTimeout(() => {
                    setDisplayText(techs[techIndex].substring(0, displayText.length + 1));
                }, 150);
            } else {
                // Pause before starting to erase
                timer = setTimeout(() => {
                    setIsTyping(false);
                }, 1500);
            }
        } else {
            // Erasing phase
            if (displayText.length > 0) {
                timer = setTimeout(() => {
                    setDisplayText(displayText.substring(0, displayText.length - 1));
                }, 75);
            } else {
                // Move to next tech when erased
                setTechIndex((prevIndex) => (prevIndex + 1) % techs.length);
                setIsTyping(true);
            }
        }

        return () => clearTimeout(timer);
    }, [displayText, isTyping, techIndex, techs]);
    return (
        <section id="hero" className="flex flex-col justify-center py-4 px-6">
            <div className="max-w-4xl">
                <h1 className="text-3xl lg:text-6xl font-bold mb-4">
                    Hi, I'm <span className={`${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Suman Regmi</span>
                </h1>
                <h2 className="text-md md:text-2xl lg:text-4xl font-bold md:font-semibold mb-2 md:mb-4 lg:mb-6">
                    <span className={`${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>Full Web Stack Developer</span>
                    <span className="inline-block animate-blink ml-1">|</span>
                    <span className={`${darkMode ? 'text-blue-400' : 'text-blue-600'} ml-1`}>{displayText} </span>
                    <span className="inline-block font-extrabold animate-pulse ml-1">|</span>
                </h2>
                <p className={`${darkMode ? 'text-white' : 'text-gray-700'} md:font-semibold text-md md:text-lg lg:text-xl mb-3 md:mb-5 lg:mb-8 max-w-2xl`}>
                    I build engaging web applications with modern technologies. Passionate about creating
                    efficient, scalable, and user-friendly solutions to complex problems.
                </p>
                <div className="flex flex-wrap gap-4">
                    <Button
                        variant="primary"
                        onClick={() => scrollToSection('projects')}
                    >
                        View My Work
                    </Button>
                    <Button
                        variant="secondary"
                        onClick={() => scrollToSection('contact')}
                    >
                        Contact Me
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default Hero