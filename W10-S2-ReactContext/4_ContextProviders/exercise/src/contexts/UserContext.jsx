import React, { createContext, useState } from "react";

// Create the context
export const UserContext = createContext();

// Theme provider component
export function UserProvider({ children }) {
    const [userName, setUserName] = useState("user12345");
    const [themeColor, setThemeColor] = useState("dark"); // Default theme color is white
  
    const changeUser = (name) => {
      setUserName(name);
    };

    const toggleTheme = () => {
      if (themeColor === "dark")
        setThemeColor("light");
      else
        setThemeColor("dark");
    }
  
    return (
      <UserContext.Provider value={{ userName, themeColor, changeUser, toggleTheme }}>
        {children}
      </UserContext.Provider>
    );
  }