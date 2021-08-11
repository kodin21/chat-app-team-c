import React from "react";
import { useTheme } from "../../context/ThemeContext";

import "./ChatInput.style.scss";

export default function ChatInput({ onSubmitFunction }) {
  const { appTheme } = useTheme();

  return (
    <form className="chat__form" onSubmit={onSubmitFunction}>
      <input type="text" className={`chat__input chat__input--${appTheme}`} />
    </form>
  );
}
