import { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import AppWindow from "../../components/app-window/AppWindow";
import WindowInput from "../../components/window-input/WindowInput";

import { useTheme } from "../../context/ThemeContext";
import languages_data from "../../utils/language";

import { database } from "../../firebase/firebaseUtils";
import useLocalStorage from "../../hooks/useLocalStorage";

import "../Pages.style.scss";

export default function Login() {
  const { language } = useTheme();
  const history = useHistory();
  const [userName, setUserName] = useState("");
  const [userStorage, setUserStorage] = useLocalStorage("user", "");
  const handleUserRegister = (event) => {
    event.preventDefault();
    if (!userName.trim()) {
      alert("Please Fiil the Value");
    } else {
      alert(userName);
      const userConfig = { name: userName, color: "#7b7b7b" };
      const userRef = database.collection("users");
      userRef.add(userConfig).then((docRef) => {
        setUserStorage({ id: docRef.id, ...userConfig });
        history.replace("/rooms");
      });
    }
  };
  const handleInput = (e) => {
    setUserName(e.target.value);
  };
  return userStorage ? (
    <Redirect to="/rooms" />
  ) : (
    <div className="login-page">
      <AppWindow title={languages_data[language].greeting}>
        <WindowInput
          onSubmitFunction={handleUserRegister}
          labelText={languages_data[language].choose_nickname}
          buttonText={languages_data[language].join}
          handleChange={handleInput}
        />
      </AppWindow>
    </div>
  );
}
