import React from "react";
import { useUser } from "../../context/UserContext";

export default function ChatColorPicker({}) {
  const { userStorage, setUserStorage } = useUser();

  const { color } = userStorage;

  const handleChangeColor = (event) => {
    let { value } = event.target;
    //Get color value without # character
    value = value.slice(1);
    //Block using white color.
    if (value === "ffffff") {
      value = "000000";
    }
    setUserStorage({ ...userStorage, color: value });
  };

  return (
    <input
      onChange={handleChangeColor}
      className="chat__color-picker"
      type="color"
      value={`#${color}`}
    />
  );
}
