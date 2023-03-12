import React, { useState, useEffect } from "react";
import "./Panel.css";
import { Timer } from "./PanelElements/Timer/Timer";
import { PanelButtons } from "./PanelElements/PanelButtons/PanelButtons";
import { ProgressBar } from "./PanelElements/ProgressBar/ProgressBar";

interface PanelInterface {
  minutes: number;
  seconds: number;
  totalTime: number;
  time: number;
  start: boolean;
  startTimer: () => void;
  stopTimer: () => void;
  reset: () => void;
  click: () => void;
}

const Panel: React.FC<PanelInterface> = ({
  minutes,
  seconds,
  start,
  totalTime,
  time,
  startTimer,
  stopTimer,
  reset,
  click
}) => {
  return (
    <main className="Panel">
      <Timer
        minutes={minutes < 10 ? `0${minutes.toString()}` : minutes.toString()}
        seconds={seconds < 10 ? `0${seconds.toString()}` : seconds.toString()}
      />
      <PanelButtons click={click} reset={reset} timerStatus={start} stop={stopTimer} start={startTimer} />
      <ProgressBar time={time} totalTime={totalTime} />
    </main>
  );
};

export { Panel };
