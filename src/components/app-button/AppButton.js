import React from "react";
import { useTheme } from "../../context/ThemeContext";

import "./AppButton.style.scss";

export default function AppButton({ text }) {
  const { appTheme } = useTheme();

  return (
    <button className={`app-button app-button--${appTheme}`}>{text}</button>
  );
}
