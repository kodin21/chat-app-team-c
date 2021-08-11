import { useState } from "react";

export default function useLocalStorage(key, initialValue) {
  const appStorage = window.localStorage;

  const [storageData, setStorageData] = useState(() => {
    const posData = appStorage.getItem(key);
    return posData ? JSON.parse(posData) : initialValue;
  });

  const setValue = (value) => {
    setStorageData(value);
    appStorage.setItem(key, JSON.stringify(value));
  };

  return [storageData, setValue];
}
