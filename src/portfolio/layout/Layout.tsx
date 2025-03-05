import Header from "./Header"
import { useState } from "react";
import { useThemeContext } from "../../ThemeContext";
import Footer from "./Footer";

const Layout = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const {darkMode} = useThemeContext();


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
            <Header
                scrollToSection={scrollToSection}
                setMobileMenuOpen={setMobileMenuOpen}
                mobileMenuOpen={mobileMenuOpen}
                activeSection={activeSection} />
                <Footer />
        </div>
    )
}

export default Layout