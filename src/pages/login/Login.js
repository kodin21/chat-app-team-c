import { useState } from "react";
import { useHistory } from "react-router-dom";
import { database } from "../../firebase/firebaseUtils";

import { useUser } from "../../context/UserContext";
import LoginBox from "./LoginBox";

import "../Pages.style.scss";

export default function Login() {
  const history = useHistory();
  const [userName, setUserName] = useState("");
  const { setUserStorage } = useUser();

  const handleUserRegister = (event) => {
    event.preventDefault();

    if (!userName.trim()) {
      alert("Please Fill the Value");
    } else {
      const userConfig = { name: userName, color: "#7b7b7b" };
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
