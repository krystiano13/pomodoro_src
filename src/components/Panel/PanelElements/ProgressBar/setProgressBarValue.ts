export const setProgressBarValue = (
  totalTime: number,
  time: number,
  ProgressBarRef: React.RefObject<HTMLDivElement>
) => {
  if (ProgressBarRef.current !== null) {
    if (totalTime !== 0) {
      ProgressBarRef.current.style.width = `${
        ((totalTime - time) / totalTime) * 100
      }vw`;
    } else {
      ProgressBarRef.current.style.width = "0vw";
    }
  }
};
