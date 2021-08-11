import { createContext, useContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const ThemeContext = createContext();

function useTheme() {
  return useContext(ThemeContext);
}

function ThemeProvider({ children }) {
  const [appTheme, setTheme] = useLocalStorage("theme", "retro");
  const [language, setLanguage] = useLocalStorage("language", "en");

  const value = { appTheme, setTheme, language, setLanguage };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export { useTheme, ThemeProvider };
