import React, { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import { useUser } from "../../context/UserContext";
import { database } from "../../firebase/firebaseUtils";
import ChatColorPicker from "./ChatColorPicker";

import "./ChatInput.style.scss";

export default function ChatInput({ chatID }) {
  const { appTheme } = useTheme();
  const { userStorage } = useUser();

  const [msg, setMsg] = useState("");
  const ischatDisabled = chatID ? false : true;

  const sendMessage = (event) => {
    event.preventDefault();
    if (msg.trim()) {
      database.collection(`room-list/${chatID}/messages`).add({
        text: msg,
        sentAt: new Date(),
        userName: userStorage.name,
        messageColor: userStorage.color,
        userID: userStorage.id,
      });
      setMsg("");
    }
  };
  const handleChatChange = (event) => {
    setMsg(event.target.value);
  };

  return (
    <form className="chat__form" onSubmit={sendMessage}>
      <input
        disabled={ischatDisabled}
        value={msg}
        onChange={handleChatChange}
        type="text"
        className={`chat__input chat__input--${appTheme}`}
      />
      <ChatColorPicker disabled={ischatDisabled} />
    </form>
  );
}
