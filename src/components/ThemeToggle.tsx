import { useEffect } from "react";

/** Forces dark mode on mount — no toggle needed */
export const ThemeToggle = () => {
  useEffect(() => {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }, []);

  return null;
};
