import React, { useState, useEffect, useRef } from "react";
import "./styles/App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Panel } from "./components/Panel/Panel";
import click from "./assets/sounds/click.mp3";
import gear from "./assets/images/gear.png";
import { Settings } from "./components/Settings/Settings";
import { handleSetTimer } from "./components/AppFunctions/handleSetTimer";
import { playSound } from "./components/AppFunctions/playSound";
import { checkTimer } from "./components/AppFunctions/checkTimer";
import { buttons } from "./components/Navbar/buttons";
import { AppBackground } from "./components/AppFunctions/AppBackground";

const App = () => {
  const [mode, setMode] = useState<string>("pomodoro");
  const [minutes, setMinutes] = useState<number>(25);
  const [start, setStart] = useState<boolean>(false);
  const [time, setTime] = useState<number>(0);
  const [totalTime, setTotalTime] = useState<number>(0);
  const [sessionCount, setSessionCount] = useState<number>(0);
  const [settingsModal, setSettingsModal] = useState<boolean>(false);
  const [navButtons, setNavButtons] = useState(buttons);

  const intervalRef = useRef<NodeJS.Timer>();
  const timeRef = useRef<number>(0);
  const minRef = useRef<number>(minutes);
  const secRef = useRef<number>(0);

  useEffect(() => {
    timeRef.current = time;
    minRef.current = Math.floor(timeRef.current / 60);
    secRef.current = timeRef.current - minRef.current * 60;

    checkTimer({
      time: time,
      start: start,
      mode: mode,
      setTime: setTime,
      setStart: setStart,
      setSessionCount: setSessionCount,
      sessionCount: sessionCount,
      handleChangeMode: handleChangeMode,
      handleStopTimer: handleStopTimer,
    });
  }, [time]);

  useEffect(() => {
    minRef.current = minutes;
  }, [minutes]);

  const handleChangeMode = (mode: string, minutes: number) => {
    setMode(mode);
    setMinutes(minutes);
    secRef.current = 0;
    const navButton = navButtons.find((item) => item.mode === mode)?.minutes;
    navButton !== undefined
      ? (minRef.current = navButton)
      : (minRef.current = 0);
  };

  const handleResetTimer = () => {
    if (start === true) {
      setTime(0);
      setTotalTime(0);
    }
  };

  const decreaseTimerValue = () => {
    let t = timeRef.current;
    t--;
    setTime(t);
  };

  const handleStopTimer = () => {
    clearInterval(intervalRef.current);
    setStart(false);
  };

  return (
    <div className={`App ${mode}`}>
      <h1 className="App__title">Pomodoro Timer App</h1>
      {settingsModal === true && (
        <Settings
          setMinutes={setMinutes}
          mode={mode}
          navButtons={navButtons}
          setNavButtons={setNavButtons}
          settingsModal={settingsModal}
          setSettingsModal={setSettingsModal}
        />
      )}

      <Navbar
        click={() => playSound(new Audio(click))}
        mode={mode}
        time={time}
        handleChangeMode={handleChangeMode}
        navButtons={navButtons}
        setNavButtons={setNavButtons}
      />

      <Panel
        click={() => playSound(new Audio(click))}
        startTimer={() => {
          handleSetTimer(
            time,
            minRef.current,
            setTotalTime,
            setTime,
            setStart,
            decreaseTimerValue
          );
          intervalRef.current = setInterval(() => {
            decreaseTimerValue();
          }, 1000);
          setStart(true);
        }}
        stopTimer={() => {
          handleStopTimer();
          setStart(false);
        }}
        start={start}
        minutes={
          minRef.current === 0 && start === false ? minutes : minRef.current
        }
        seconds={secRef.current}
        totalTime={totalTime}
        time={timeRef.current}
        reset={handleResetTimer}
      />

      <AppBackground />

      <button
        onClick={() => {
          setSettingsModal(!settingsModal);
        }}
        className="App__settingsButton"
      >
        <img
          className="App__settingsButton__image"
          src={gear}
          alt="settings image"
        />
      </button>
    </div>
  );
};

export default App;
