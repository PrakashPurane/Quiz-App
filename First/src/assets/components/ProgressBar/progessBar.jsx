import React from "react";
import "./progressBar.css";

const progessBar = ({ progress }) => {
  return (
    <div className="progress-bar-container">
      <div
        className="progress-bar"
        style={{ width: `${progress}%`, backgroundColor: "#9215e6" }}
      ></div>
    </div>
  );
};

export default progessBar;
