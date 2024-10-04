import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isLightTheme, setIsLightTheme] = useState(false);

  const toggleTheme = () => {
    setIsLightTheme((prevTheme) => !prevTheme);
  };

  const value = {
    isLightTheme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      <div
        className={`main-container ${
          isLightTheme ? "main-container-light" : "main-container-dark"
        }`}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
