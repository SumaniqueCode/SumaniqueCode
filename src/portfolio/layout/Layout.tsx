import Header from "./Header"
import { useThemeContext } from "../../ThemeContext";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
    const { darkMode } = useThemeContext();
    
    return (
        <div className={`relative ${darkMode ? 'text-white' : 'bg-gradient-to-r from-gray-50 to-gray-100 text-gray-900'}`}>
            {/* Dark mode overlay with right margin */}
            <div className={`fixed inset-0 bg-gray-900 transition-[clip-path] duration-500 ease-in-out mr-4
                ${darkMode ? 'clip-path-full' : 'clip-path-circle'}`} />
            
            {/* Content container */}
            <div className="relative z-10">
                <Header />
                <Outlet />
                <Footer />
            </div>
        </div>
    )
}

export default Layout