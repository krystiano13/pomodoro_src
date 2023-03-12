import React from "react";
import "./PanelButtons.css";
import skip2 from "../../../../assets/images/skip2.png";

interface ButtonsInterface {
  start: () => void;
  stop: () => void;
  timerStatus: boolean;
  reset: () => void;
  click: () => void
}

const PanelButtons: React.FC<ButtonsInterface> = ({
  start,
  stop,
  timerStatus,
  reset,
  click
}) => {
  return (
    <section className="PanelButtons">
      <button
        onClick={() => {
          !timerStatus ? start() : stop();
          click();
        }}
        className={`PanelButtons__${timerStatus ? "stop" : "start"}`}
      >
        {timerStatus ? "Stop" : "Start"}
      </button>
      <button onClick={() => {
        reset();
        click();
      }} className="PanelButtons__skip">
        <img className="PanelButtons__skip__img" src={skip2} alt="skip" />
      </button>
    </section>
  );
};

export { PanelButtons };
