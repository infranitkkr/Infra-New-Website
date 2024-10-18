// PopupContext.js
import React, { createContext, useContext, useState } from "react";

const PopupContext = createContext();

export const PopupProvider = ({ children }) => {
  const [popupContent, setPopupContent] = useState("data");

  return (
    <PopupContext.Provider value={{ popupContent, setPopupContent }}>
      {children}
    </PopupContext.Provider>
  );
};

export const usePopup = () => useContext(PopupContext);
