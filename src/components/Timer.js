import React, { useState, useEffect } from "react";
import Controls from "./Controls";
import Settings from "./Setting";
import "../styles/Timer.css";

const Timer = () => {
  const [workTime, setWorkTime] = useState(25);
  const [breakTime, setBreakTime] = useState(5);
  const [time, setTime] = useState(workTime * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [isWorkSession, setIsWorkSession] = useState(true);

  useEffect(() => {
    let interval;
    if (isRunning && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      setIsWorkSession(!isWorkSession);
      setTime(isWorkSession ? breakTime * 60 : workTime * 60);
    }
    return () => clearInterval(interval);
  }, [isRunning, time, isWorkSession, workTime, breakTime]);


  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

    useEffect(() => {
    setTime(isWorkSession ? workTime * 60 : breakTime * 60);
  }, [workTime, breakTime, isWorkSession]);

  return (
    <div className="timer-container">
      <div className="glassmorphism">
        <h1>Pomodoro Timer</h1>
        <h2 className="countdown">{formatTime(time)}</h2>
        <p>{isWorkSession ? "Work Session" : "Break Time"}</p>
        <Controls
          isRunning={isRunning}
          setIsRunning={setIsRunning}
          setTime={setTime}
          initialMinutes={isWorkSession ? workTime : breakTime}
        />
        <Settings setWorkTime={setWorkTime} setBreakTime={setBreakTime} />
      </div>
    </div>
  );
};

export default Timer;
