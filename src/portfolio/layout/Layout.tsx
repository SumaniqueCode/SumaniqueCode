import Footer from "./Footer"
import { Outlet } from "react-router-dom"
import Header from "./Header"
import { useEffect, useState } from "react";
import Landing from "../landing/Landing";
import { useThemeContext } from "../../ThemeContext";

const Layout = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const {darkMode, setDarkMode} = useThemeContext();

    useEffect(() => {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setDarkMode(prefersDark);
    }, []);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const scrollToSection = (sectionId: string) => {
        setActiveSection(sectionId);
        setMobileMenuOpen(false);

        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <div className={`${darkMode ? 'dark bg-gray-900 text-white' : 'bg-gradient-to-r from-gray-50 to-gray-100 text-gray-900'}`}>
            <Header darkMode={darkMode}
                scrollToSection={scrollToSection}
                toggleDarkMode={toggleDarkMode}
                setMobileMenuOpen={setMobileMenuOpen}
                mobileMenuOpen={mobileMenuOpen}
                activeSection={activeSection} />
                <Landing  darkMode={darkMode} scrollToSection={scrollToSection}/>
            {/* <Outlet /> */}
            <Footer />
        </div>
    )
}

export default Layout