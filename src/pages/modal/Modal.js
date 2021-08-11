import React from "react";
import AppWindow from "../../components/app-window/AppWindow";
import WindowInput from "../../components/window-input/WindowInput";
import { useTheme } from "../../context/ThemeContext";
import languages_data from "../../utils/language";

export default function Modal() {
  const { language } = useTheme();

  return (
    <div className="modal-page">
      <div className="modal-page__window">
        <AppWindow title={languages_data[language].create_new_room}>
          <WindowInput
            onSubmitFunction={(event) => {
              event.preventDefault();
              alert("Modal");
            }}
            labelText={languages_data[language].room_name}
            buttonText={languages_data[language].create}
          />
        </AppWindow>
      </div>
    </div>
  );
}
