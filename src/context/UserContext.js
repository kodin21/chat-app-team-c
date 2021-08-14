import { createContext, useContext } from "react";

import useLocalStorage from "../hooks/useLocalStorage";

const UserContext = createContext();

function useUser() {
  return useContext(UserContext);
}

function UserProvider({ children }) {
  const [userStorage, setUserStorage] = useLocalStorage("user", "");

  const userLogout = () => {
    setUserStorage("");
  };

  const value = { userStorage, setUserStorage, userLogout };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export { useUser, UserProvider };
