import React, { useEffect, useState } from "react";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import { useTheme } from "../../context/ThemeContext";
import { database } from "../../firebase/firebaseUtils";
import Loading from "../loading/Loading";

import "./ChatList.style.scss";

export default function ChatList({ chatID }) {
  const { appTheme } = useTheme();
  const [messages, setMessages] = useState([]);

  const [value, loading, error] = useDocument(
    database.collection(`room-list/${chatID}/messages`)
  );

  useEffect(() => {
    if (value) {
      console.log(value.docs.map((doc) => doc.data()));
    }
  }, [value]);

  return <div className={`chat-list chat-list--${appTheme}`}></div>;
}
