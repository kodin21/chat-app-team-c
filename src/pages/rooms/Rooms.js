import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

import AddRoomModal from "../add-room-modal/AddRoomModal";
import RoomList from "../../components/room-list/RoomList";
import ChatList from "../../components/chat-list/ChatList";
import ChatInput from "../../components/chat-input/ChatInput";
import AppWindow from "../../components/app-window/AppWindow";

import { database } from "../../firebase/firebaseUtils";

import "../Pages.style.scss";

export default function Rooms() {
  const history = useHistory();
  const { id } = useParams();

  const [isRoomLoaded, setRoomLoaded] = useState(false);
  const [isRoomModal, setRoomModal] = useState(false);
  const [roomName, setRoomName] = useState("Room");

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

  //TODO REFACTOR HERE
  //TODO REFACTOR HERE
  //TODO REFACTOR HERE
  //TODO REFACTOR HERE
  return (
    isRoomLoaded && (
      <div className="rooms-page">
        <AppWindow title={roomName}>
          <div className="rooms-page__content">
            <RoomList toggleModal={setRoomModal} setTitle={setRoomName} />
            {id ? <ChatList chatID={id} /> : <h1>BOS ROOM TEST</h1>}
            <ChatInput chatID={id} />
          </div>
        </AppWindow>
        {isRoomModal && <AddRoomModal toggleModal={setRoomModal} />}
      </div>
    )
  );
}
