import React, { memo } from "react";
import { useTheme } from "../../context/ThemeContext";

import "./AppWindow.style.scss";
function AppWindow({ title, children }) {
  const { appTheme } = useTheme();
  // theme window for different layout
  return (
    <div className="window">
      <div className={`window__bar window__bar--${appTheme}`}>{title}</div>
      <div className={`window__content window__content--${appTheme}`}>
        {children}
      </div>
    </div>
  );
}
export default memo(AppWindow);
