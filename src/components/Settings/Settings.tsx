import React, { useRef } from "react";
import "./Settings.css";
import { navigationButtons } from "../Navbar/handleChoosePanel";

interface SettingsInterface {
  navButtons: navigationButtons;
  setNavButtons: React.Dispatch<React.SetStateAction<navigationButtons>>;
  setMinutes: React.Dispatch<React.SetStateAction<number>>;
  mode: string;
  setSettingsModal: React.Dispatch<React.SetStateAction<boolean>>;
  settingsModal: boolean;
}

const Settings: React.FC<SettingsInterface> = ({
  navButtons,
  setNavButtons,
  setMinutes,
  mode,
  setSettingsModal,
  settingsModal,
}) => {
  const handleChangeMinutes = (e: React.ChangeEvent<HTMLInputElement>) => {
    const buttons = [...navButtons];
    buttons[Number(e.target.id)].minutes = Number(e.target.value);
    setNavButtons(buttons);
    const minutes = buttons.find((item) => item.mode === mode)?.minutes;
    if (minutes !== undefined) setMinutes(minutes);
  };

  return (
    <section className="settings">
      <h1 className="settings__title">Settings</h1>
      <form className="settings__form">
        <div className="settings__form__element">
          <label className="settings__form__element__label">
            Learning block time
          </label>
          <input
            className="settings__form__element__input"
            required
            type="number"
            defaultValue={navButtons[0].minutes}
            min={1}
            id="0"
            onChange={(e) => handleChangeMinutes(e)}
          />
        </div>
        <div className="settings__form__element">
          <label className="settings__form__element__label">
            Short break time
          </label>
          <input
            className="settings__form__element__input"
            required
            type="number"
            defaultValue={navButtons[1].minutes}
            min={1}
            id="1"
            onChange={(e) => handleChangeMinutes(e)}
          />
        </div>
        <div className="settings__form__element">
          <label className="settings__form__element__label">
            Long break time
          </label>
          <input
            className="settings__form__element__input"
            required
            type="number"
            defaultValue={navButtons[2].minutes}
            min={1}
            id="2"
            onChange={(e) => handleChangeMinutes(e)}
          />
        </div>
        <button
          onClick={() => {
            setSettingsModal(!settingsModal);
          }}
          className="settings__form__button"
          type="button"
        >
          Save & Quit
        </button>
      </form>
    </section>
  );
};

export { Settings };
