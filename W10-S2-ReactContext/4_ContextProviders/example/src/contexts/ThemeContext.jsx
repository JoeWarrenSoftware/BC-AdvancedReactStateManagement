import React, { createContext, useState } from "react";

// Create the context
export const ThemeContext = createContext();

// Theme provider component
export function ThemeProvider({ children }) {
  const [themeColor, setThemeColor] = useState("#ffffff"); // Default theme color is white

  const changeTheme = (color) => {
    setThemeColor(color);
  };

  const toggleTheme = () => {
    if (themeColor === "#ffffff")
      setThemeColor("#000000");
    else
      setThemeColor("#ffffff");
  }

  return (
    <ThemeContext.Provider value={{ themeColor, changeTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
