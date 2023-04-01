export const playSound = (audio: HTMLAudioElement) => {
  audio.volume = 0.75;
  audio.play();
};
