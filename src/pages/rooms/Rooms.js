import { useEffect, useState } from "react";
import { Redirect, useHistory, useParams } from "react-router-dom";

import AddRoomModal from "../add-room-modal/AddRoomModal";
import RoomList from "../../components/room-list/RoomList";
import ChatList from "../../components/chat-list/ChatList";
import ChatInput from "../../components/chat-input/ChatInput";
import AppWindow from "../../components/app-window/AppWindow";

import { useTheme } from "../../context/ThemeContext";

import languages_data from "../../utils/language";
import { database } from "../../firebase/firebaseUtils";

import "../Pages.style.scss";

export default function Rooms() {
  const { language } = useTheme();
  const history = useHistory();
  const { id } = useParams();

  const [isRoomLoaded, setRoomLoaded] = useState(false);
  const [isRoomModal, setRoomModal] = useState(false);

  // Get room string from selected language
  const { rooms } = languages_data[language];

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    isRoomLoaded && (
      <div className="rooms-page">
        <AppWindow title={rooms}>
          <div className="rooms-page__content">
            <RoomList toggleModal={setRoomModal} />
            {id ? <ChatList chatID={id} /> : <h1>BOS ROOM TEST</h1>}
            <ChatInput chatID={id} />
          </div>
        </AppWindow>
        {isRoomModal && <AddRoomModal toggleModal={setRoomModal} />}
      </div>
    )
  );
}
