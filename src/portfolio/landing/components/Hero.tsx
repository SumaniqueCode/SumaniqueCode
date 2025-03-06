interface heroProps {
    darkMode: boolean,
    setActiveSection: (sectionId: string) => void
}

const Hero = ({ darkMode, setActiveSection }: heroProps) => {
    return (
        <section id="home" className="min-h-screen flex flex-col justify-center py-4">
            <div className="max-w-4xl">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Hi, I'm <span className={`${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Suman Regmi</span>
                </h1>
                <h2 className="text-2xl md:text-4xl font-semibold mb-6">
                    <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Full Stack Developer</span>
                    <span className="inline-block animate-blink ml-1">|</span>
                </h2>
                <p className="text-lg md:text-xl mb-8 max-w-2xl">
                    I build engaging web applications with modern technologies. Passionate about creating
                    efficient, scalable, and user-friendly solutions to complex problems.
                </p>
                <div className="flex flex-wrap gap-4">
                    <button
                        onClick={() => setActiveSection('projects')}
                        className={`px-6 py-3 rounded-md ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-600 hover:bg-blue-700'} text-white font-medium cursor-pointer transition-colors`}
                    >
                        View My Work
                    </button>
                    <button
                        onClick={() => setActiveSection('contact')}
                        className={`px-6 py-3 rounded-md ${darkMode ? 'bg-gray-700 hover:bg-gray-800' : 'bg-gray-200 hover:bg-gray-300'} font-medium cursor-pointer transition-colors`}
                    >
                        Contact Me
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Hero
