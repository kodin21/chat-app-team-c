import { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const ThemeContext = createContext();

function useTheme() {
  return useContext(ThemeContext);
}

function ThemeProvider({ children }) {
  const [appTheme, setTheme] = useLocalStorage("theme", "retro");
  const [language, setLanguage] = useLocalStorage("language", "en");

  const changeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "retro" ? "modern" : "retro"));
  };
  const changeLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "en" ? "tr" : "en"));
  };

  const value = { appTheme, changeTheme, language, changeLanguage };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export { useTheme, ThemeProvider };
