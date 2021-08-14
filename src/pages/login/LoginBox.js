import React from "react";
import AppWindow from "../../components/app-window/AppWindow";
import WindowInput from "../../components/window-input/WindowInput";
import { useTheme } from "../../context/ThemeContext";
import languages_data from "../../utils/language";

export default function LoginBox({
  handleUserRegister,
  handleInput,
  userName,
}) {
  // Get selected language
  const { language } = useTheme();
  // Get strings by selected language
  const { choose_nickname, join, greeting } = languages_data[language];

  return (
    <AppWindow title={greeting}>
      <WindowInput
        labelText={choose_nickname}
        inputValue={userName}
        onChangeFunction={handleInput}
        onSubmitFunction={handleUserRegister}
        buttonText={join}
      />
    </AppWindow>
  );
}
