import React, { useEffect } from "react";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import { useTheme } from "../../context/ThemeContext";
import { database } from "../../firebase/firebaseUtils";
import Loading from "../loading/Loading";

import "./ChatList.style.scss";

export default function ChatList({ chatID }) {
  const { appTheme } = useTheme();

  const [value, loading, error] = useDocument(
    database.collection("messages").doc(chatID)
  );

  useEffect(() => {
    if (value) {
      console.log(chatID);
    }
  }, [value]);

  return (
    <div className={`chat-list chat-list--${appTheme}`}>
      {value &&
        Object.keys(value.data()).map((key) => <p>{value.data()[key].text}</p>)}
    </div>
  );
}
