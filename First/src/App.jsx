import React, { useState } from "react";
import Quiz from "./assets/components/Quiz/Quiz";
import Mode from "./assets/components/Mode/Mode";
import "./App.css";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <div className={`app-container  ${isDarkMode ? "dark-mode" : ""}`}>
      <div className={`circle ${isDarkMode ? "dark-mode" : ""}`}></div>
      <div className={`second-circle ${isDarkMode ? "dark-mode" : ""}`}></div>

        <Mode toggleDarkMode={toggleDarkMode} />
        <Quiz isDarkMode={isDarkMode} />
      </div>
    </>
  );
};

export default App;
