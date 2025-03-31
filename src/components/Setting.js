import React, { useState } from "react";
import "../styles/Timer.css";

const Settings = ({ setWorkTime, setBreakTime }) => {
  const [newWorkTime, setNewWorkTime] = useState(25);
  const [newBreakTime, setNewBreakTime] = useState(5);

  const applySettings = () => {
    setWorkTime(newWorkTime);
    setBreakTime(newBreakTime);
  };

  return (
    <div className="settings">
      <label>Work Time (min):</label>
      <input
        type="number"
        value={newWorkTime}
        onChange={(e) => setNewWorkTime(Number(e.target.value))}
      />
      <label>Break Time (min):</label>
      <input
        type="number"
        value={newBreakTime}
        onChange={(e) => setNewBreakTime(Number(e.target.value))}
      />
      <button className="apply-btn" onClick={applySettings}>Apply</button>
    </div>
  );
};

export default Settings;
