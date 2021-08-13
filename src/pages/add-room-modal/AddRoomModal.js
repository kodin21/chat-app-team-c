import React, { useState } from "react";
import Modal from "../modal/Modal";
import WindowInput from "../../components/window-input/WindowInput";
import AppWindow from "../../components/app-window/AppWindow";
import languages_data from "../../utils/language";
import { useTheme } from "../../context/ThemeContext";
import { database } from "../../firebase/firebaseUtils";

const AddRoomModal = () => {
  const { language } = useTheme();
  const [roomName, setRoomName] = useState("");

  const createRoom = (event) => {
    event.preventDefault();
    if (roomName.trim()) {
      database.collection(`room-list`).add({
        name: roomName,
      });
      setRoomName("");
    }
  };

  const handleChange = (event) => {
    setRoomName(event.target.value);
  };
  return (
    <Modal>
      <AppWindow title={languages_data[language].create_new_room}>
        <WindowInput
          onSubmitFunction={createRoom}
          onChange={handleChange}
          labelText={languages_data[language].room_name}
          buttonText={languages_data[language].create}
        />
      </AppWindow>
    </Modal>
  );
};

export default AddRoomModal;
