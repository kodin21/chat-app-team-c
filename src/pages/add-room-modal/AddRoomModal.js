import { useState } from "react";
import Modal from "../../components/modal/Modal";
import WindowInput from "../../components/window-input/WindowInput";
import AppWindow from "../../components/app-window/AppWindow";

import { useTheme } from "../../context/ThemeContext";
import { database } from "../../firebase/firebaseUtils";

import languages_data from "../../utils/language";

const AddRoomModal = ({ toggleModal }) => {
  const { language } = useTheme();
  const [roomName, setRoomName] = useState("");

  // Get language data
  const { create_new_room, create, room_name } = languages_data[language];
  // room create function
  const createRoom = (event) => {
    event.preventDefault();
    if (roomName.trim()) {
      database
        .collection(`room-list`)
        .add({
          name: roomName,
          createdAt: new Date(),
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
