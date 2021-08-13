import React from "react";
import { useTheme } from "../../context/ThemeContext";

import "./AppButton.style.scss";

export default function AppButton({ text, onClickFunction, type = "button" }) {
  const { appTheme } = useTheme();

  return (
    <button
      type={type}
      className={`app-button app-button--${appTheme}`}
      onClick={onClickFunction}
    >
      {text}
    </button>
  );
}
