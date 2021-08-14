import React, { useEffect, useRef } from "react";
import { useDocument } from "react-firebase-hooks/firestore";

import { useTheme } from "../../context/ThemeContext";
import { useUser } from "../../context/UserContext";
import { database, realTime } from "../../firebase/firebaseUtils";
import Loading from "../loading/Loading";
import "./ChatList.style.scss";

export default function ChatList({ chatID }) {
  const { appTheme } = useTheme();
  const chatListRef = useRef(null);
  const { userStorage } = useUser();

  const [value, loading] = useDocument(
    database.collection(`room-list/${chatID}/messages`).orderBy("sentAt")
  );

  // add user to room at real time database
  useEffect(() => {
    const connectRef = realTime.ref(`/rooms/${chatID}/${userStorage.id}`);
    connectRef.set(userStorage);
    connectRef.onDisconnect().remove();
    return () => connectRef.remove();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chatID]);

  const getChatList = () => {
    if (value) {
      return value.docs.map((doc, index) => {
        const { userName, messageColor, sentAt, text } = doc.data();

        return (
          <p key={index}>
            <span
              className={`chat-list__date chat-list__date--${appTheme}`}
            >{`<${userName} - ${sentAt.toDate().toLocaleString()} >`}</span>
            <span style={{ paddingLeft: "1rem", color: `#${messageColor}` }}>
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
