import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

export default function RoomBox({ name, id, setTitle }) {
  const { appTheme } = useTheme();

  return (
    <Link
      className={`room-box__link room-box__link--${appTheme}`}
      to={`/rooms/${id}`}
      onClick={() => {
        setTitle(name);
      }}
    >
      <li className={`room-box room-box--${appTheme}`}>&rarr;{name}</li>
    </Link>
  );
}
