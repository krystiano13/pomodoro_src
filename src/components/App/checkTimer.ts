import React from "react";
import { playSound } from "./playSound";
import alarm from "../../assets/sounds/alarm.mp3";
import { TimePropsInterface } from "./TimePropsInterface";

export const checkTimer = (timeProps: TimePropsInterface) => {
  if (timeProps.time <= 0 && timeProps.start === true) {
    timeProps.setStart(false);
    playSound(new Audio(alarm));
    let count = timeProps.sessionCount;
    if (timeProps.mode === "pomodoro") count++;
    timeProps.setSessionCount(count);
    if (timeProps.mode === "pomodoro") {
      if (timeProps.sessionCount < 2) timeProps.handleChangeMode("short", 5);
      else {
        timeProps.handleChangeMode("long", 15);
        timeProps.setSessionCount(0);
      }
    } else if (timeProps.mode === "short") {
      timeProps.handleChangeMode("pomodoro", 25);
    } else timeProps.handleChangeMode("pomodoro", 25);
    timeProps.setTime(0);
    timeProps.handleStopTimer();
  }
};

