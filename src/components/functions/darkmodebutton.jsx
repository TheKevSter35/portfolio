import { React, useEffect } from "react";

const DarkMode = () => {
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      const element = document.querySelector("body");
      element.classList.add("dark");
    }
  }, []);

  const handleOnClick = () => {
    const element = document.querySelector("body");
    element.classList.toggle("dark");
  };

  return (
    <button
      onClick={() => {
        handleOnClick();
      }}
      aria-label="theme button"
      className="darkmodebutton"
    >
      <span></span>
    </button>
  );
};

export default DarkMode;
