import { useState, useEffect } from "react";

function useLocalStorage(key, initialState) {
  const [state, setState] = useState(() => {
    try {
      const localStorageValue = localStorage.getItem(key);
      if (localStorageValue) {
        return JSON.parse(localStorageValue);
      } else {
        return initialState;
      }
    } catch (error) {
      console.warn("could not read from local Storage");
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state]);

  return [state, setState];
}

export default useLocalStorage;
