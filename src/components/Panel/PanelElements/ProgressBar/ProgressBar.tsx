import React, { useRef, useEffect } from "react";
import "./ProgressBar.css";
import { setProgressBarValue } from "./setProgressBarValue";

interface ProgressBarInterface {
  time: number;
  totalTime: number;
}

const ProgressBar: React.FC<ProgressBarInterface> = ({ time, totalTime }) => {
  const ProgressBarRef = useRef(null);

  useEffect(() => setProgressBarValue(totalTime, time, ProgressBarRef), [time]);
  useEffect(() => setProgressBarValue(totalTime, time, ProgressBarRef), []);

  return (
    <div className="ProgressBar">
      <section ref={ProgressBarRef} className="ProgressBar__body" />
    </div>
  );
};

export { ProgressBar };
