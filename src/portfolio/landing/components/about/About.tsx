import ProfileWithShinyBorder from './ProfileWithShinyBorder'

interface aboutProps {
    darkMode: boolean
}
const About = ({ darkMode }: aboutProps) => {
    return (
        <section id="about" className="py-4">
            <h2 className={`text-3xl font-bold mb-6 text-center ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                About Me
            </h2>
            <div className="flex flex-col md:flex-row gap-12 items-center">
                {/* <div className="md:w-1/3 flex justify-center">
                    <div
                        className={`w-64 h-64 rounded-full overflow-hidden border-4 ${darkMode ? 'border-blue-400' : 'border-blue-600'} rotating-border`}
                    >
                        <img
                            src={Profile}
                            alt="Profile"
                            className="w-full h-full object-cover"
                        />
                    </div> 
                </div>*/}
                <ProfileWithShinyBorder darkMode={darkMode} profile="/images/logos/pp.png" />

                <div className="md:w-2/3">
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
                        <a
                            href="https://github.com/SumaniqueCode"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center gap-2 px-4 py-2 rounded-md ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                            GitHub
                        </a>
                        <a
                            href="https://www.linkedin.com/in/suman-regmi-0b2440244/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center gap-2 px-4 py-2 rounded-md ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                            LinkedIn
                        </a>
                        <a
                            href="mailto:helpmeforhelp@gmail.com"
                            className={`flex items-center gap-2 px-4 py-2 rounded-md ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z" />
                            </svg>
                            Email
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About

