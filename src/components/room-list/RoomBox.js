import React from "react";
import { Link } from "react-router-dom";

export default function RoomBox({ name, id }) {
  return (
    <Link className="room-box__link" to={`/rooms/${id}`}>
      <li className="room-box">-- {name}</li>
    </Link>
  );
}
