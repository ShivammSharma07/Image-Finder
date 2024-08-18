import React from "react";
import useGlobalContext from "../context";
import { FaSun, FaMoon } from "react-icons/fa";

export const ThemeToggle = () => {
  const { isDarkTheme, toggleTheme } = useGlobalContext();
  return (
    <section className="toggle-container">
      <button className="dark-toggle" onClick={toggleTheme}>
        {isDarkTheme ? (
          <FaMoon className="toggle-icon" />
        ) : (
          <FaSun className="toggle-icon" />
        )}
      </button>
    </section>
  );
};
