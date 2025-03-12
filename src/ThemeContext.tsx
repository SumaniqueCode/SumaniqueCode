import React, { createContext, useContext, useState, ReactNode, } from "react";
interface ThemeContextType {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
  activeSection: string;
  setActiveSection: (value: string) => void;
  scroller: (value: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("top");
  const scroller = (sectionId: string) => {
    if (sectionId === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(sectionId);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode, activeSection, setActiveSection, scroller }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }
  return context;
};
