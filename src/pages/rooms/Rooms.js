import React, { useEffect } from "react";
import AppWindow from "../../components/app-window/AppWindow";
import languages_data from "../../utils/language";
import { useTheme } from "../../context/ThemeContext";
import { useParams } from "react-router";

import RoomList from "../../components/room-list/RoomList";
import ChatList from "../../components/chat-list/ChatList";

import "../Pages.style.scss";
import ChatInput from "../../components/chat-input/ChatInput";
import Modal from "../modal/Modal";

export default function Rooms() {
  const { language } = useTheme();
  const { id } = useParams();

  return (
    <div className="rooms-page">
      <AppWindow title={languages_data[language].rooms}>
        <div className="rooms-page__content">
          <RoomList />
          {id ? <ChatList chatID={id} /> : <h1>BOS ROOM TEST</h1>}
          <ChatInput />
        </div>
      </AppWindow>
      {/* <Modal /> */}
    </div>
  );
}
