import React from "react";
import "../styles/Timer.css";

const Controls = ({ isRunning, setIsRunning, setTime, initialMinutes }) => {
  return (
    <div className="controls">
      <button className="btn start-btn" onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? "Pause" : "Start"}
      </button>
      <button
        className="btn reset-btn"
        onClick={() => {
          setIsRunning(false);
          setTime(initialMinutes * 60);
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default Controls;
