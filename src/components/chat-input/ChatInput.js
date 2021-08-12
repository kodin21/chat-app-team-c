import React, { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import { useUser } from "../../context/UserContext";
import firebase, { database } from "../../firebase/firebaseUtils";

import "./ChatInput.style.scss";

export default function ChatInput({ chatID }) {
  const { appTheme } = useTheme();
  const { userStorage } = useUser();

  const [msg, setMsg] = useState("");

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
        value={msg}
        onChange={handleChatChange}
        type="text"
        className={`chat__input chat__input--${appTheme}`}
      />
    </form>
  );
}
