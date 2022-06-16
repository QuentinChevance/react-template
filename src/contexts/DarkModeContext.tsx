import { createContext, ReactNode, useState } from "react";

const DarkModeContext = createContext<{
  isDark: boolean;
  toggleDarkMode: () => void;
} | null>(null);

const DarkModeProvider = ({ children }: { children: ReactNode }) => {
  const [isDark, setIsDark] = useState(false);

  const toggleDarkMode = () => {
    if (isDark) {
      document.body.classList.remove("dark");
    } else {
      document.body.classList.add("dark");
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
