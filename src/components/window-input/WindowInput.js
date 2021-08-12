import React from "react";
import { useTheme } from "../../context/ThemeContext";
import AppButton from "../app-button/AppButton";

import "./WindowInput.style.scss";

//Window input
//Takes a on submit function from parent

export default function WindowInput({
  onSubmitFunction,
  labelText,
  buttonText,
  handleChange,
}) {
  const { appTheme } = useTheme();

  return (
    <form className="window-form" onSubmit={onSubmitFunction}>
      <label className="window-form__label">{labelText}</label>
      <input
        className={`window-form__input window-form__input--${appTheme}`}
        onChange={handleChange}
      ></input>
      <AppButton text={buttonText} />
    </form>
  );
}
