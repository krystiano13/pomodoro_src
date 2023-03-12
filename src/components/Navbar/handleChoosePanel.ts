export type navigationButtons = {
  id: number;
  text: string;
  mode: string;
  minutes: number;
}[];

export const handleChoosePanel = (
  e: React.MouseEvent<HTMLElement>,
  time: number,
  navButtons: navigationButtons,
  handleChangeMode: (mode: string, minutes: number) => void
) => {
  const id = Number(e.target instanceof Element ? e.target?.id : -1);
  const btns = [...navButtons];

  if (time <= 0 || id === -1) {
    handleChangeMode(btns[id].mode, btns[id].minutes);
  }
  return btns;
};
