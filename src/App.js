import { useTheme } from "./context/ThemeContext";
import { Switch, Route, Redirect } from "react-router-dom";

import "./App.scss";
import Login from "./pages/login/Login";
import Rooms from "./pages/rooms/Rooms";

function App() {
  //Theme Context
  const { appTheme } = useTheme();

  return (
    <div className={`app app__background--${appTheme}`}>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/rooms">
          <Rooms />
        </Route>
        <Route>
          <Redirect to="/login" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
