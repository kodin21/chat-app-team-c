import React, { useState } from "react";
import Modal from "../modal/Modal";
import WindowInput from "../../components/window-input/WindowInput";
import AppWindow from "../../components/app-window/AppWindow";
import languages_data from "../../utils/language";
import { useTheme } from "../../context/ThemeContext";
import { database } from "../../firebase/firebaseUtils";

const AddRoomModal = ({ toggleModal }) => {
  const { language } = useTheme();
  const [roomName, setRoomName] = useState("");
  // Get language data
  const { create_new_room, create, room_name } = languages_data[language];

  const createRoom = (event) => {
    event.preventDefault();
    if (roomName.trim()) {
      database
        .collection(`room-list`)
        .add({
          name: roomName,
        })
        .then(() => {
          toggleModal((prevToggleState) => !prevToggleState);
          setRoomName("");
        });
    }
  };

  const handleChange = (event) => {
    setRoomName(event.target.value);
  };
  return (
    <Modal toggle={toggleModal}>
      <AppWindow title={create_new_room}>
        <WindowInput
          inputValue={roomName}
          onSubmitFunction={createRoom}
          onChangeFunction={handleChange}
          labelText={room_name}
          buttonText={create}
        />
      </AppWindow>
    </Modal>
  );
};

export default AddRoomModal;
