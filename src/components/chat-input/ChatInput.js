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
  // send message to firebase
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
  // chat input html code
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
