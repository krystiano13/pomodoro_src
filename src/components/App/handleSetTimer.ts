import React, { Dispatch, SetStateAction } from "react";

export const handleSetTimer = (
  time: number,
  minutes: number,
  setTotalTime: Dispatch<SetStateAction<number>>,
  setTime: Dispatch<SetStateAction<number>>,
  setStart: Dispatch<SetStateAction<boolean>>,
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
