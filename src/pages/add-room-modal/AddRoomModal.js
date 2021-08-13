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
      <AppWindow title={languages_data[language].create_new_room}>
        <WindowInput
          inputValue={roomName}
          onSubmitFunction={createRoom}
          onChangeFunction={handleChange}
          labelText={languages_data[language].room_name}
          buttonText={languages_data[language].create}
        />
      </AppWindow>
    </Modal>
  );
};

export default AddRoomModal;
