import React, { useState } from "react";
import Quiz from "./assets/components/Quiz/Quiz";
import Mode from "./assets/components/Mode/Mode";
 import './App.css'

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <>
    <div className={`app-container  ${isDarkMode ? 'dark-mode' : ''}`}>

      <Mode toggleDarkMode={toggleDarkMode} />
      <Quiz isDarkMode={isDarkMode} />
    </div>
    </>
  );
};

export default App;
