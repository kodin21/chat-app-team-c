import { useTheme } from "./context/ThemeContext";
import { Switch, Route, Redirect } from "react-router-dom";

import "./App.scss";
import Login from "./pages/login/Login";
import Rooms from "./pages/rooms/Rooms";
import { useUser } from "./context/UserContext";

const pageComponents = {
  login: <Login />,
  rooms: <Rooms />,
};

//Check if user exists then navigate to destionation path
function redirectUser(user, routePath, destinationPath) {
  return user ? (
    <Redirect to={`/${destinationPath}`} />
  ) : (
    pageComponents[routePath]
  );
}

function App() {
  //Theme Context
  const { appTheme } = useTheme();
  const { userStorage } = useUser();

  return (
    <div className={`app app__background--${appTheme}`}>
      <Switch>
        <Route exact path="/">
          <Redirect to={`/${userStorage ? "rooms" : "login"}`} />
        </Route>
        <Route exact path="/login">
          {redirectUser(userStorage, "login", "rooms")}
        </Route>
        <Route exact path="/rooms/:id">
          {redirectUser(!userStorage, "rooms", "login")}
        </Route>
        <Route exact path="/rooms/">
          {redirectUser(!userStorage, "rooms", "login")}
        </Route>
        <Route path="*">
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
