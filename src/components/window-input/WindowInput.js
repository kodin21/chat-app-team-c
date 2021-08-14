import React, { useEffect } from "react";
import { useTheme } from "../../context/ThemeContext";
import AppButton from "../app-button/AppButton";

import "./WindowInput.style.scss";

//Window input
//Takes a on submit function from parent

export default function WindowInput({
  onSubmitFunction,
  onChangeFunction,
  labelText,
  buttonText,
  inputValue,
}) {
  const { appTheme } = useTheme();

  return (
    <form className="window-form" onSubmit={onSubmitFunction}>
      <label className={`window-form__label window-form__label--${appTheme}`}>
        {labelText}
      </label>
      <input
        value={inputValue}
        className={`window-form__input window-form__input--${appTheme}`}
        onChange={onChangeFunction}
      ></input>
      <AppButton text={buttonText} type="submit" />
    </form>
  );
}
