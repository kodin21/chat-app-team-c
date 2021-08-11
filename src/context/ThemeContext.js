import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

function useTheme() {
  return useContext(ThemeContext);
}

function ThemeProvider({ children }) {
  const [appTheme, setTheme] = useState("retro");

  const value = { appTheme, setTheme };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export { useTheme, ThemeProvider };
