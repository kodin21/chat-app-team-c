import React from "react";
import { useTheme } from "../../context/ThemeContext";
import languages_data from "../../utils/language";
import AppButton from "../app-button/AppButton";

import "./RoomList.style.scss";

export default function RoomList() {
  const { appTheme, language } = useTheme();

  const handleClickAlert = () => {
    alert("Yeah");
  };
  return (
    <div className={`room-list room-list--${appTheme}`}>
      <h2 className="room-list__heading">
        -- {languages_data[language].rooms} --
      </h2>
      <div className="room-list__buttons">
        <AppButton
          text={languages_data[language].create_room}
          onClickFunction={handleClickAlert}
        />
      </div>
    </div>
  );
}
