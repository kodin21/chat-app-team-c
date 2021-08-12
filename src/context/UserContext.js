import { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const UserContext = createContext();

function useUser() {
  return useContext(UserContext);
}

function UserProvider({ children }) {
  const [userStorage, setUserStorage] = useLocalStorage("user", "");

  const value = { userStorage, setUserStorage };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export { useUser, UserProvider };
