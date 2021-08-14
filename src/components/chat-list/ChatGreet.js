import React from "react";
import { useTheme } from "../../context/ThemeContext";
import languages_data from "../../utils/language";

export default function ChatGreet() {
  const { appTheme, language } = useTheme();

  const { chat_greet_hello, chat_greet_rooms } = languages_data[language];
  return (
    <div className={`chat-list chat-list__greet chat-list--${appTheme}`}>
      <div className="chat-list__greet-img" />
      <h1>{chat_greet_hello}</h1>
      <p>{chat_greet_rooms}</p>
      <a
        href="https://github.com/kodin21/chat-app-team-c"
        className="github-link"
        target="_blank"
        rel="noreferrer"
      >
        {""}
      </a>
    </div>
  );
}
