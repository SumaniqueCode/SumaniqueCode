import { useEffect, useState } from "react";

interface heroProps {
    darkMode: boolean,
    setActiveSection: (sectionId: string) => void
}

const Hero = ({ darkMode, setActiveSection }: heroProps) => {
    const techs = ['Laravel', 'React', 'Django']
    const [displayText, setDisplayText] = useState("");
    const [techIndex, setTechIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        let timer: NodeJS.Timeout | undefined;
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
        <section id="home" className="flex flex-col justify-center py-4 duration-500">
            <div className="max-w-4xl">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Hi, I'm <span className={`${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Suman Regmi</span>
                </h1>
                <h2 className="text-2xl md:text-4xl font-semibold mb-6">
                    <span className={`${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>Full Web Stack Developer</span>
                    <span className="inline-block animate-blink ml-1">|</span>
                    <span className="text-blue-600 ml-2">{displayText}</span>
                </h2>
                <p className={`${darkMode ? 'text-white' : 'text-gray-700'} font-semibold text-lg md:text-xl mb-8 max-w-2xl`}>
                    I build engaging web applications with modern technologies. Passionate about creating
                    efficient, scalable, and user-friendly solutions to complex problems.
                </p>
                <div className="flex flex-wrap gap-4">
                    <button
                        onClick={() => setActiveSection('projects')}
                        className={`px-6 py-3 rounded-md ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-600 hover:bg-blue-700'} text-white font-medium cursor-pointer`}
                    >
                        View My Work
                    </button>
                    <button
                        onClick={() => setActiveSection('contact')}
                        className={`px-6 py-3 rounded-md ${darkMode ? 'bg-gray-700 hover:bg-gray-800' : 'bg-gray-200 hover:bg-gray-300'} font-medium cursor-pointer`}
                    >
                        Contact Me
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Hero
