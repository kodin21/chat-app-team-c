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
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/rooms/:id">
          <Rooms />
        </Route>
        <Route exact path="/rooms/">
          <Rooms />
        </Route>
        <Route path="*">
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
