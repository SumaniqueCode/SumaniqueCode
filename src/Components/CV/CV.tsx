import Profile2 from '../../../public/assets/profile2.jpeg'

const CV = () => {
    return (
        <section className="cv mx-16">
            <h1 className="font-semibold text-3xl sm:text-4xl xs:mb-2 sm:mb-8">CURRICULUM VITAE</h1>
            <div className="grid grid-cols-12">
                <div className="profile hidden sm:block sm:col-span-3 lg:col-span-2 mt-auto">
                    <div className="image mb-2">
                        <img src={Profile2} alt="Photo" className="xs:w-32 md:w-36 xl:40 rounded" />
                    </div>
                </div>

                <div className="intro col-span-12 sm:col-span-9 lg:col-span-10 ms-2">
                    <h1 className="font-semibold md:text-4xl sm:mb-2"> SUMAN REGMI</h1>
                    <h4 className="font-medium md:text-2xl sm:mb-2">IT STUDENT</h4>
                    <p className="xs:text-sm md:text-base ms-2 mb-2 lg:mb-8">I am a BCA student with a high interest in IT. I am determined and
                        devoted to Programming. I work hours on my laptop to solve the
                        problems encountered while learning new things in coding. I have been
                        learning few programming languages that are from and out of my course but
                        I have high interest in machine learning, artificial Intelligence and data science
                        which obviously makes me crazy in learning python.</p>
                </div>
                <hr className="w-full border-2 border-blue-500 col-span-12" />

                <div className="expertise col-span-12 lg:col-span-6">
                    <h2 className="font-semibold xs:text-2xl sm:text-3xl">EXPERTISE</h2>
                    <div className="">
                        <p><i className="fa fa-cog fa-spin mb-2"></i> Python</p>
                        <p><i className="fa fa-cog fa-spin mb-2"></i> C Programming </p>
                        <p><i className="fa fa-cog fa-spin mb-2"></i> Full Stack Web Development</p>
                        <p><i className="fa fa-cog fa-spin mb-2"></i> JAVA</p>
                        <hr className="w-full border-2 border-blue-500 my-2" />
                    </div>
                </div>
                <div className="education col-span-12 lg:col-span-6">
                    <h2 className="font-semibold xs:text-2xl sm:text-3xl mb-1.5">EDUCATION</h2>
                    <div className="flex mb-5">
                        <div className="etime w-1/3">
                            <i className="fa-solid fa-circle-dot text-blue-800"></i><b> 2017 - 2019</b>
                            <p className="ms-1 border-l-4 border-blue-600 h-3/6"></p>
                            <i className="fa-solid fa-circle-dot text-blue-800"></i><b> 2020 - Present</b>
                        </div>
                        <div className="edesc w-2/3">
                            <dl><b>Koshi St. James College</b></dl>
                            <dd className="text-md">+2 in Science</dd>
                            <dl><b>Koshi St. James College</b></dl>
                            <dd className="text-md">Bachelor in Computer Application (BCA)</dd>
                        </div>
                    </div>
                    <hr className="w-full ms-2 border-2 border-blue-500 my-2" />
                </div>
                <div className="work col-span-12 lg:col-span-6">
                    <h2 className="font-semibold xs:text-2xl sm:text-3xl mb-2">EXPERIENCE</h2>
                    <div className="flex">
                        <div className="wtime ms-2 w-1/5">
                            <i className="fa-solid fa-circle-dot text-blue-800"></i><b> 2020</b>
                            <p className="ms-1 border-l-4 border-blue-600 h-1/4"></p>
                            <i className="fa-solid fa-circle-dot text-blue-800"></i><b> 2019 - Present</b>
                            <p className="ms-1 border-l-4 border-blue-600 h-1/3"></p>
                            <i className="fa-solid fa-circle-dot text-blue-800"></i><b> 2024</b>
                        </div>
                        <div className="wdesc w-4/5 mt-2">
                            <dl className="mb-2"><i className="fa fa-cog fa-spin"></i><b> Graphics Designer and IT Instructor</b></dl>
                            <dd className="mb-2">
                                <p className="xs:text-xs sm:text-base">&emsp;I worked as a graphics designer and
                                    instructed the workers on technical problems in Prime Cyber Cafe, Kathmandu.
                                    While working at there, I also learned
                                    how to interact with customers and the value of
                                    time.
                                </p>
                            </dd>
                            <dl className="mb-2"><i className="fa fa-cog fa-spin mt-2"></i> <b> Part-time Jobs</b></dl>
                            <dd className="mb-2">
                                <p className="text-xs sm:text-base">&emsp;I have been working on different online platforms
                                    for a long time. I have also worked in development of few Web based and Android
                                    based
                                    applications.
                                    I have worked as a content creator
                                    on Youtube and blogger. I have also worked as a freelancer in different freelancing
                                    websites.
                                </p>
                            </dd>
                            <dl className="mb-2"><i className="fa fa-cog fa-spin mt-2"></i> <b> Jr. FullStack Web Developer</b></dl>
                            <dd className="mb-2">
                                <p className="text-xs sm:text-base">&emsp;I worked as a Jr. Full stack web developer at
                                Hunchha Digital, Itahari. My stacks were: Laravel (API, Sanctum, Socialite Package) , React (Material UI, TypeScript, Redux, Axios).
                                </p>
                            </dd>
                        </div>
                    </div>
                    <hr className="w-full ms-2 border-2 border-blue-500 my-2" />
                </div>
                <div className="Language col-span-12 lg:col-span-6 text-lg mb-2">
                    <div className='col-span-12 lg:col-span-6'>
                        <h2 className="font-semibold xs:text-2xl sm:text-3xl mb-2">LANGUAGE</h2>
                        <li className="mb-2">English</li>
                        <li className="mb-2">Nepali</li>
                        <li className="sm:mb-2">Hindi</li>
                        <hr className="w-full border-2 border-blue-500 my-2" />
                    </div>
                    <div className="certificate col-span-12 lg:col-span-6 mb-2">
                        <h2 className="font-semibold xs:text-2xl sm:text-3xl mb-2">CERTIFICATE</h2>
                        <div className="flex me-auto">
                            <div>
                                <dl><i className="fa fa-cog fa-spin"></i> <b> Vue JS</b></dl>
                                <dd>
                                    CODE IT, Nepal
                                </dd>
                                <dl><i className="fa fa-cog fa-spin"></i> <b> React Js</b></dl>
                                <dd>
                                    UDEMY
                                </dd>
                                <dl><i className="fa fa-cog fa-spin"></i> <b> Ethical Hacking</b></dl>
                                <dd>
                                    UDEMY
                                </dd>
                            </div>
                            <div className="ms-auto me-auto">
                                <dl><i className="fa fa-cog fa-spin"></i> <b> Laravel</b></dl>
                                <dd>
                                    Huncha Digital, Itahari
                                </dd>
                                <dl><i className="fa fa-cog fa-spin"></i> <b> Python</b></dl>
                                <dd>
                                    UDEMY
                                </dd>
                            </div>
                        </div>
                        <hr className="w-full border-2 border-blue-500 my-4" />
                    </div>
                </div>
                <div className="ms-2 contact col-span-12 lg:col-span-6">
                    <h2 className="font-semibold xs:text-2xl sm:text-3xl">CONTACT</h2>
                    <div className='flex flex-col'>
                        <a href="https://www.linkedin.com/in/suman-regmi-0b2440244/" target="_blank">
                            <i className="fa-brands fa-linkedin"></i><b> suman-regmi-0b2440244</b>
                        </a>
                        <a href="https://www.twitter.com/@regmisuman_2000" target="_blank">
                            <i className="fa-brands fa-twitter"></i><b>  @regmisuman_2000</b>
                        </a>
                        <a href="https://www.instagram.com/regmisuman_2000" target="_blank">
                            <i className="fa-brands fa-instagram"> </i><b> @regmisuman_2000</b>
                        </a>
                        <a href="mailto:helpmeforhelp@gmail.com" target="_blank">
                            <i className="fa-solid fa-envelope"></i><b>helpmeforhelp@gmail.com</b>
                        </a>
                        <a href="tel:9800000000">
                        <i className="fas fa-phone"></i><b> +977 9800000000</b>
                        </a>
                        <a href="https://goo.gl/maps/7LVxyYngnffWmy4Z6" target="_blank">
                            <i className="fas fa-map-marker-alt"></i><b> Itahari,Nepal</b>
                        </a>
                    </div>
                    <hr className="w-full border-2 border-blue-500" />
                </div>
            </div>
        </section>
    )
}

export default CV