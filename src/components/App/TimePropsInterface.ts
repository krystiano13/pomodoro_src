import { Dispatch, SetStateAction } from "react";

export interface TimePropsInterface {
  time: number;
  start: boolean;
  mode: string;
  setTime: Dispatch<SetStateAction<number>>;
  setStart: Dispatch<SetStateAction<boolean>>;
  setSessionCount: Dispatch<SetStateAction<number>>;
  sessionCount: number;
  handleChangeMode: (mode : string, minutes : number) => void;
  handleStopTimer: () => void;
}
