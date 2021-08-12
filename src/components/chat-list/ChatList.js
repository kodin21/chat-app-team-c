import React, { useEffect, useRef, useState } from "react";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import { useTheme } from "../../context/ThemeContext";
import { database } from "../../firebase/firebaseUtils";
import Loading from "../loading/Loading";

import "./ChatList.style.scss";

export default function ChatList({ chatID }) {
  const { appTheme } = useTheme();
  const chatListRef = useRef(null);

  const [value, loading, error] = useDocument(
    database.collection(`room-list/${chatID}/messages`).orderBy("sentAt")
  );

  const getChatList = () => {
    if (value) {
      return value.docs.map((doc) => {
        const { userName, messageColor, sentAt, text } = doc.data();

        return (
          <p>
            {`<${userName}> < ${sentAt.toDate().toLocaleString()} >`}
            <span style={{ paddingLeft: "1rem", color: messageColor }}>
              {text}
            </span>
          </p>
        );
      });
    }
  };

  useEffect(() => {
    chatListRef.current.scrollIntoView({ behavior: "smooth" });
  }, [value]);

  return (
    <div className={`chat-list chat-list--${appTheme}`}>
      {loading ? <Loading /> : getChatList()}
      <div className="empty-scroll-box" ref={chatListRef}></div>
    </div>
  );
}
