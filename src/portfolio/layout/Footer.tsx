import { useThemeContext } from "../../ThemeContext";

const Footer = () => {
  const {darkMode}=useThemeContext();
  return (
    <footer className={`${darkMode ? 'bg-gray-800' : 'bg-white'} py-8`}>
      <div className="max-w-4xl mx-auto text-center">
        <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} text-sm`}>
          © {new Date().getFullYear()} Suman Regmi. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
