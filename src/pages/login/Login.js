import { useState } from "react";
import { useHistory } from "react-router-dom";
import { database } from "../../firebase/firebaseUtils";

import { useUser } from "../../context/UserContext";
import LoginBox from "./LoginBox";

import "../Pages.style.scss";
import randomColor from "../../utils/randomColor";
import { useTheme } from "../../context/ThemeContext";
import languages_data from "../../utils/language";

export default function Login() {
  const history = useHistory();
  const [userName, setUserName] = useState("");
  const { setUserStorage } = useUser();
  const { language } = useTheme();

  //Get username error message
  const { username_input_empty_error } = languages_data[language];

  const handleUserRegister = (event) => {
    event.preventDefault();

    if (!userName.trim()) alert(username_input_empty_error);
    else {
      const userConfig = { name: userName, color: randomColor() };
      const userRef = database.collection("users");

      //Create a new user
      userRef.add(userConfig).then((docRef) => {
        setUserStorage({ id: docRef.id, ...userConfig });
        //Navigate to rooms page
        history.replace("/rooms");
      });
    }
  };

  const handleInput = (event) => {
    setUserName(event.target.value);
  };

  return (
    <div className="login-page">
      <LoginBox {...{ handleUserRegister, userName, handleInput }} />
    </div>
  );
}
