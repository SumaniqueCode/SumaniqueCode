import { Link } from "react-router-dom";
import { Github, Linkedin, Instagram, Youtube, Mail, MapPin } from "lucide-react";
import { useThemeContext } from "../ThemeContext";

const quickLinks = [
  { label: "Home", to: "/home" },
  { label: "Projects", to: "/projects" },
  { label: "Commands", to: "/commands" },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/SumaniqueCode", icon: Github, color: { light: "#333333", dark: "#e5e7eb" } },
  { label: "LinkedIn", href: "https://linkedin.com/in/suman-regmi-0b2440244", icon: Linkedin, color: { light: "#0A66C2", dark: "#0A66C2" } },
  { label: "Instagram", href: "https://instagram.com/regmisuman_2000", icon: Instagram, color: { light: "#E4405F", dark: "#E4405F" } },
  { label: "YouTube", href: "https://www.youtube.com/@sumaniquecode", icon: Youtube, color: { light: "#FF0000", dark: "#FF0000" } },
];

const Footer = () => {
  const { darkMode } = useThemeContext();

  return (
    <footer className={`border-t-6 mt-8 ${darkMode ? "border-gray-800" : "border-gray-200"}`}>
      <div className="max-w-6xl mx-auto px-4 py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/home" className="inline-flex items-center gap-2">
              <span className="text-2xl font-bold">
                <span className={darkMode ? "text-blue-400" : "text-blue-600"}>Suman</span> Regmi
              </span>
            </Link>
            <p className={`mt-3 max-w-md text-sm leading-relaxed ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
              Full Stack Web Developer specializing in React, Django, and Laravel. I build engaging,
              performant web applications and enjoy turning complex problems into clean, maintainable code.
            </p>
          </div>

          {/* Quick Links */}
          <nav aria-label="Footer quick links">
            <h2 className={`text-sm font-semibold uppercase tracking-wide mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}>
              Quick Links
            </h2>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className={`text-sm transition-colors duration-300 ${darkMode ? "text-gray-400 hover:text-blue-400" : "text-gray-600 hover:text-blue-600"}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h2 className={`text-sm font-semibold uppercase tracking-wide mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}>
              Contact
            </h2>
            <ul className="space-y-2.5 mb-4">
              <li>
                <a
                  href="mailto:helpmeforhelp@gmail.com"
                  className={`flex items-center gap-2 text-sm transition-colors duration-300 ${darkMode ? "text-gray-400 hover:text-blue-400" : "text-gray-600 hover:text-blue-600"}`}
                >
                  <Mail className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                  <span className="break-all">helpmeforhelp@gmail.com</span>
                </a>
              </li>
              <li className={`flex items-center gap-2 text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                <MapPin className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                <span>Itahari, Nepal</span>
              </li>
            </ul>
            <div className="flex flex-wrap gap-2">
              {socialLinks.map(({ label, href, icon: Icon, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className={`p-2 rounded-lg shadow-sm transition-all duration-300 hover:scale-110 hover:shadow-md ${darkMode ? "bg-gray-800" : "bg-gray-100"}`}
                >
                  <Icon className="w-4 h-4" style={{ color: darkMode ? color.dark : color.light }} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className={`mt-10 pt-6 border-t text-center ${darkMode ? "border-gray-800" : "border-gray-200"}`}>
          <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
            &copy; {new Date().getFullYear()} Suman Regmi. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
