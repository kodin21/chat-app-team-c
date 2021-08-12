import React, { useEffect, useState } from "react";
import AppWindow from "../../components/app-window/AppWindow";
import languages_data from "../../utils/language";
import { useTheme } from "../../context/ThemeContext";
import { useParams } from "react-router";

import RoomList from "../../components/room-list/RoomList";
import ChatList from "../../components/chat-list/ChatList";

import "../Pages.style.scss";
import ChatInput from "../../components/chat-input/ChatInput";
import Modal from "../modal/Modal";
import { database } from "../../firebase/firebaseUtils";
import firebase from "firebase";

export default function Rooms() {
  const { language } = useTheme();
  const { id } = useParams();
  const [msg, setMsg] = useState("");

  function sendMessage(e) {
    e.preventDefault();
    database.collection(`room-list/${id}/messages`).add({
      text: msg,
      sentAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setMsg("");
  }
  return (
    <div className="rooms-page">
      <AppWindow title={languages_data[language].rooms}>
        <div className="rooms-page__content">
          <RoomList />
          {id ? <ChatList chatID={id} /> : <h1>BOS ROOM TEST</h1>}
          <ChatInput
            handleChange={(e) => setMsg(e.target.value)}
            onSubmitFunction={sendMessage}
          />
        </div>
      </AppWindow>
      {/* <Modal /> */}
    </div>
  );
}
