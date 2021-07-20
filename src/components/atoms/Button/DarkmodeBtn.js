import React, {useState} from "react";
import DarkModeToggle from "react-dark-mode-toggle";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [isDarkMode, setIsDarkMode] = useState(() => false);
  return (
    <DarkModeToggle 
      onChange={setIsDarkMode}
      checked={isDarkMode}
      size={80}
    />
  );
};