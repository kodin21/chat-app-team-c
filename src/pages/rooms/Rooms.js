import AppWindow from "../../components/app-window/AppWindow";
import languages_data from "../../utils/language";
import { useTheme } from "../../context/ThemeContext";
import { useParams } from "react-router";

import RoomList from "../../components/room-list/RoomList";
import ChatList from "../../components/chat-list/ChatList";

import "../Pages.style.scss";
import ChatInput from "../../components/chat-input/ChatInput";

import { Redirect, useHistory } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import { useDocumentOnce } from "react-firebase-hooks/firestore";
import { database } from "../../firebase/firebaseUtils";
import { useEffect, useState } from "react";
import Modal from "../modal/Modal";
import AddRoomModal from "../add-room-modal/AddRoomModal";

export default function Rooms() {
  const { language } = useTheme();
  const { userStorage } = useUser();
  const history = useHistory();
  const { id } = useParams();

  const [isRoomLoaded, setRoomLoaded] = useState(false);

  const isRoomExists = () => {
    if (id) {
      const roomRef = database.collection("room-list").doc(id);
      roomRef.get().then((roomSnapshot) => {
        if (!roomSnapshot.exists) {
          history.replace("/rooms");
        } else {
          setRoomLoaded(true);
        }
      });
    } else {
      setRoomLoaded(true);
    }
  };

  useEffect(() => {
    isRoomExists();
  }, [id]);

  return !userStorage ? (
    <Redirect to="/login" />
  ) : (
    isRoomLoaded && (
      <div className="rooms-page">
        <AppWindow title={languages_data[language].rooms}>
          <div className="rooms-page__content">
            <RoomList />
            {id ? <ChatList chatID={id} /> : <h1>BOS ROOM TEST</h1>}
            <ChatInput chatID={id} />
          </div>
        </AppWindow>
        <AddRoomModal />
      </div>
    )
  );
}
