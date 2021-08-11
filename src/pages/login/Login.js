import { useHistory } from "react-router-dom";
import AppWindow from "../../components/app-window/AppWindow";
import WindowInput from "../../components/window-input/WindowInput";

import { useTheme } from "../../context/ThemeContext";
import languages_data from "../../utils/language";

import "../Pages.style.scss";

export default function Login() {
  const { language } = useTheme();
  const history = useHistory();

  const handleUserRegister = (event) => {
    event.preventDefault();
    alert(event.target.value);
    history.push("/rooms");

    //TODO BURA DOLDURULMALI KULLANICI FIREBASE ICERISINDE USERS ICINE EKLENMELI
    //LOCALSTORAGE ICERISINDE TUTULACAK SEKILDE
  };
  return (
    <div className="login-page">
      <AppWindow title={languages_data[language].greeting}>
        <WindowInput
          onSubmitFunction={handleUserRegister}
          labelText={languages_data[language].choose_nickname}
          buttonText={languages_data[language].join}
        />
      </AppWindow>
    </div>
  );
}
