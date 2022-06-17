import { createContext, ReactNode, useEffect, useState } from "react";

const DarkModeContext = createContext<{
  isDark: boolean;
  toggleDarkMode: () => void;
} | null>(null);

const LOCAL_STORAGE_KEY = "darkMode";

const DarkModeProvider = ({ children }: { children: ReactNode }) => {
  const [isDark, setIsDark] = useState(
    localStorage.getItem(LOCAL_STORAGE_KEY) === "true"
  );

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const toggleDarkMode = () => {
    if (isDark) {
      localStorage.setItem(LOCAL_STORAGE_KEY, "false");
    } else {
      localStorage.setItem(LOCAL_STORAGE_KEY, "true");
    }
    setIsDark((currIsDark) => !currIsDark);
  };

  return (
    <DarkModeContext.Provider
      value={{
        isDark,
        toggleDarkMode,
      }}
    >
      {children}
    </DarkModeContext.Provider>
  );
};

export { DarkModeContext, DarkModeProvider };
