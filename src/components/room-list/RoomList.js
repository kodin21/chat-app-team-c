import React, { useEffect, useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import { database, realTime } from "../../firebase/firebaseUtils";

import languages_data from "../../utils/language";
import AppButton from "../app-button/AppButton";

import { useCollection } from "react-firebase-hooks/firestore";

import "./RoomList.style.scss";
import RoomBox from "./RoomBox";
import Loading from "../loading/Loading";
import { useList } from "react-firebase-hooks/database";

export default function RoomList({ toggleModal, setTitle }) {
  const { appTheme, language } = useTheme();
  const [roomsData, setRoomsData] = useState({});

  const [value, loading] = useCollection(database.collection("room-list"));

  const [snapshot] = useList(realTime.ref(`rooms`));

  useEffect(() => {
    setRoomsData(
      snapshot.reduce(
        (prevDoc, currentDoc) => ({
          ...prevDoc,
          [currentDoc.key]: {
            data: currentDoc.val(),
            count: Object.keys(currentDoc.val()).length,
          },
        }),
        {}
      )
    );
  }, [snapshot]);

  //Get language data
  const { create_room, rooms } = languages_data[language];

  const getRoomNames = (value) => {
    if (value) {
      return value.docs.map((doc) => (
        <RoomBox
          key={doc.id}
          name={doc.data().name}
          id={doc.id}
          setTitle={setTitle}
          userCount={roomsData[doc.id] ? roomsData[doc.id].count : 0}
        />
      ));
    } else {
      return "";
    }
  };

  return (
    <div className={`room-list room-list--${appTheme}`}>
      <h2 className="room-list__heading">-- {rooms} --</h2>
      {loading ? (
        <Loading />
      ) : (
        <ul className="room-list__container">{getRoomNames(value)}</ul>
      )}
      <div className="room-list__buttons">
        <AppButton
          onClickFunction={() => {
            toggleModal((prevToggleState) => !prevToggleState);
          }}
          text={create_room}
        />
      </div>
    </div>
  );
}
