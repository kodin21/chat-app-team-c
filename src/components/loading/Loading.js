import React from "react";
import { useTheme } from "../../context/ThemeContext";

import "./Loading.style.scss";
export default function Loading() {
  const { appTheme } = useTheme();
  // loading screen animation
  return <div className={`loading loading--${appTheme}`}></div>;
}
