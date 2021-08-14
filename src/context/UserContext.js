import { createContext, useContext } from "react";
import { database } from "../firebase/firebaseUtils";

import useLocalStorage from "../hooks/useLocalStorage";

const UserContext = createContext();

function useUser() {
  return useContext(UserContext);
}

function UserProvider({ children }) {
  const [userStorage, setUserStorage] = useLocalStorage("user", "");

  const userLogout = () => {
    const { id } = userStorage;
    const userDataRef = database.collection("users").doc(id);
    userDataRef
      .delete()
      .then(() => {
        setUserStorage("");
      })
      .catch((error) => {
        console.log(error);
        setUserStorage("");
      });
  };

  const value = { userStorage, setUserStorage, userLogout };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export { useUser, UserProvider };
