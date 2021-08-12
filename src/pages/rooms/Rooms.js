import AppWindow from "../../components/app-window/AppWindow";
import languages_data from "../../utils/language";
import { useTheme } from "../../context/ThemeContext";
import { useParams } from "react-router";

import RoomList from "../../components/room-list/RoomList";
import ChatList from "../../components/chat-list/ChatList";

import "../Pages.style.scss";
import ChatInput from "../../components/chat-input/ChatInput";

import { Redirect } from "react-router-dom";
import { useUser } from "../../context/UserContext";

export default function Rooms() {
  const { language } = useTheme();
  const { userStorage } = useUser();
  const { id } = useParams();

  return !userStorage ? (
    <Redirect to="/login" />
  ) : (
    <div className="rooms-page">
      <AppWindow title={languages_data[language].rooms}>
        <div className="rooms-page__content">
          <RoomList />
          {id ? <ChatList chatID={id} /> : <h1>BOS ROOM TEST</h1>}
          <ChatInput chatID={id} />
        </div>
      </AppWindow>
      {/* <Modal /> */}
    </div>
  );
}
