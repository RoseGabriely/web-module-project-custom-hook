import React from "react";
import useLocalStorage from "./useLocalStorage";
//is dark mode on or off
//dark mode should return a boolean to know if it is on or off
//a function to set darkmode on or off

export default function useDarkMode() {
  const [darkModeStatus, setDarkModeStatus] = useLocalStorage(
    "isDarkModeOn",
    false
  );

  return [darkModeStatus, setDarkModeStatus];
}
