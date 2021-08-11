import React from "react";
import AppWindow from "../../components/app-window/AppWindow";
import languages_data from "../../utils/language";
import { useTheme } from "../../context/ThemeContext";
import { useParams } from "react-router";

export default function Rooms() {
  const { language } = useTheme();
  const params = useParams();

  console.log(params);
  return (
    <div className="rooms-page">
      <AppWindow title={languages_data[language].rooms}>
        <div className="rooms-page__content"></div>
      </AppWindow>
    </div>
  );
}
