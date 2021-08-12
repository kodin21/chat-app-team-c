import React from "react";
import { useTheme } from "../../context/ThemeContext";
import Loading from "../loading/Loading";

import "./ChatList.style.scss";

export default function ChatList({ chatList }) {
  const { appTheme } = useTheme();
  return (
    <div className={`chat-list chat-list--${appTheme}`}>
      {/* <Loading /> */}
    </div>
  );
}
