import useDarkMode from "../../hooks/useDarkMode";
import Moon from "./Moon";
import Sun from "./Sun";

const DarkMode = () => {
  const { toggleDarkMode, isDark } = useDarkMode();

  return (
    <button className="absolute top-3 right-3" onClick={toggleDarkMode}>
      {isDark ? <Moon /> : <Sun />}
    </button>
  );
};

export default DarkMode;
