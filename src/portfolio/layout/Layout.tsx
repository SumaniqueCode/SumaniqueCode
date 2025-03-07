import Header from "./Header"
import { useThemeContext } from "../../ThemeContext";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
const Layout = () => {
    const { darkMode } = useThemeContext();

    return (
        <div className={`relative ${darkMode ? 'text-white' : 'text-gray-900'} duration-500`}>
            {/* Dark mode overlay*/}
            <div className={`fixed inset-0 bg-gray-900 transition-[clip-path] duration-800 ease-in-out
                ${darkMode ? 'clip-path-full' : 'clip-path-circle'}`} />
            {/* Content container */}
            <div className="relative z-10">
                <Header />
                <div className="pt-24">
                <Outlet />
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Layout