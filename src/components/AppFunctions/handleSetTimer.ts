import React from "react";

export const handleSetTimer = (
  time: number,
  minutes: number,
  setTotalTime: React.Dispatch<React.SetStateAction<number>>,
  setTime: React.Dispatch<React.SetStateAction<number>>,
  setStart: React.Dispatch<React.SetStateAction<boolean>>,
  decreaseTimerValue: () => void
) => {
  let timeCount = 0;
  if (time <= 0) {
    timeCount = minutes * 60;
    setTotalTime(timeCount);
  } else {
    timeCount = time;
  }
  setTime(timeCount);
  setStart(true);
};
