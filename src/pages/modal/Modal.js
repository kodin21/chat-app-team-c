import React from "react";
import AppWindow from "../../components/app-window/AppWindow";
import WindowInput from "../../components/window-input/WindowInput";
import { useTheme } from "../../context/ThemeContext";
import languages_data from "../../utils/language";

export default function Modal({ children }) {
  const { language } = useTheme();

  return (
    <div className="modal-page">
      <div className="modal-page__window">{children}</div>
    </div>
  );
}
