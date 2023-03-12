import { playSound } from "./playSound";
import { handleSetTimer } from "./handleSetTimer";
import alarm from "../../assets/sounds/alarm.mp3";

export const checkTimer = (
  time: number,
  start: boolean,
  mode: string,
  setTime: React.Dispatch<React.SetStateAction<number>>,
  setStart: React.Dispatch<React.SetStateAction<boolean>>,
  setSessionCount: React.Dispatch<React.SetStateAction<number>>,
  sessionCount: number,
  handleChangeMode: (mode: string, minutes: number) => void,
  handleStopTimer: () => void
) => {
  if (time <= 0 && start === true) {
    setStart(false);
    playSound(new Audio(alarm));
    let count = sessionCount;
    if (mode === "pomodoro") count++;
    setSessionCount(count);
    if (mode === "pomodoro") {
      if (sessionCount < 3) handleChangeMode("short", 5);
      else {
        handleChangeMode("long", 15);
        setSessionCount(0);
      }
    } else if (mode === "short") {
      handleChangeMode("pomodoro", 25);
    } else handleChangeMode("pomodoro", 25);
    setTime(0);
    handleStopTimer();
  }
};
