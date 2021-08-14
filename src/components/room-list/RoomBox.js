import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

export default function RoomBox({ name, id, setTitle, userCount }) {
  const { appTheme } = useTheme();

  return (
    <li className={`room-item room-item--${appTheme}`}>
      <Link
        to={`/rooms/${id}`}
        onClick={() => {
          setTitle(name);
        }}
      >
        <span className="room-item__name">&rarr; {name}</span>
        <span className={`room-item__count room-item__count--${appTheme} `}>
          {userCount}
        </span>
      </Link>
    </li>
  );
}
