import React, { useEffect } from "react";
import { useTheme } from "../../context/ThemeContext";
import { database } from "../../firebase/firebaseUtils";

import languages_data from "../../utils/language";
import AppButton from "../app-button/AppButton";

import { useCollection } from "react-firebase-hooks/firestore";

import "./RoomList.style.scss";
import RoomBox from "./RoomBox";
import Loading from "../loading/Loading";

export default function RoomList() {
  const { appTheme, language } = useTheme();

  const [value, loading, error] = useCollection(
    database.collection("room-list")
  );

  const getRoomNames = (value) => {
    if (value) {
      return value.docs.map((doc) => (
        <RoomBox name={doc.data().name} id={doc.id} />
      ));
    } else {
      return "";
    }
  };

  useEffect(() => {
    if (value) {
      console.log(getRoomNames(value));
    }
  }, [value]);

  return (
    <div className={`room-list room-list--${appTheme}`}>
      <h2 className="room-list__heading">
        -- {languages_data[language].rooms} --
      </h2>
      {loading ? (
        <Loading />
      ) : (
        <ul className="room-list__container">{getRoomNames(value)}</ul>
      )}
      <div className="room-list__buttons">
        <AppButton text={languages_data[language].create_room} />
      </div>
    </div>
  );
}
