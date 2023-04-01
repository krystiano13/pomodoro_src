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

const Panel: React.FC<PanelInterface> = (props: PanelInterface) => {
  return (
    <main className="Panel">
      <Timer
        minutes={
          props.minutes < 10
            ? `0${props.minutes.toString()}`
            : props.minutes.toString()
        }
        seconds={
          props.seconds < 10
            ? `0${props.seconds.toString()}`
            : props.seconds.toString()
        }
      />
      <PanelButtons
        click={props.click}
        reset={props.reset}
        timerStatus={props.start}
        stop={props.stopTimer}
        start={props.startTimer}
      />
      <ProgressBar time={props.time} totalTime={props.totalTime} />
    </main>
  );
};

export { Panel };
