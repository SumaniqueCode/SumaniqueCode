import { useThemeContext } from "../ThemeContext";

const Footer = () => {
  const {darkMode}=useThemeContext();
  return (
    <footer className={`border-t-6 rounded-2xl py-4`}>
      <div className="max-w-4xl mx-auto text-center">
        <p className={`${darkMode ? 'text-white' : 'text-gray-700'} duration-500 text-md`}>
          © {new Date().getFullYear()} Suman Regmi. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
