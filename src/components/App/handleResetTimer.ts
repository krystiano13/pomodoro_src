import { MutableRefObject, Dispatch, SetStateAction } from "react";

export const handleResetTimer = (props: ResetProps) => {
  if (props.start === true) {
    props.setTime(0);
    props.setTotalTime(0);
  } else if (props.start === false && props.timeRef.current > 0) {
    props.setStart(true);
    props.setTime(0);
    props.setTotalTime(0);
  }
};

interface ResetProps {
  start: boolean;
  setTime: Dispatch<SetStateAction<number>>;
  setTotalTime: Dispatch<SetStateAction<number>>;
  setStart: Dispatch<SetStateAction<boolean>>;
  timeRef: MutableRefObject<number>;
}
