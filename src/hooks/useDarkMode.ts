import { useContext } from "react";
import { DarkModeContext } from "../contexts/DarkModeContext";

const useDarkMode = () => {
  const darkModeContext = useContext(DarkModeContext);
  if (!darkModeContext) {
    throw new Error(
      "The hook useDarkMode must be used inside a DarkModeProvider"
    );
  }

  return darkModeContext;
};

export default useDarkMode;
