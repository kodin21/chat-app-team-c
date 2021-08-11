import React from "react";
import { useTheme } from "../../context/ThemeContext";

import "./AppWindow.style.scss";
export default function AppWindow({ title, children }) {
  const { appTheme } = useTheme();

  return (
    <div className="window">
      <div className={`window__bar window__bar--${appTheme}`}>{title}</div>
      <div className="window__content window__content--retro">{children}</div>
    </div>
  );
}
