import React, { createContext, useContext, useState } from "react";

const PhotographerTextContext = createContext();

export const PhotographerTextProvider = ({ children }) => {
  const [selectedPhotographerText, setSelectedPhotographerText] =
    useState(null);

  const setSelectedPhotographer = (photographer) => {
    setSelectedPhotographerText(photographer);
  };

  return (
    <PhotographerTextContext.Provider
      value={{ selectedPhotographerText, setSelectedPhotographer }}>
      {children}
    </PhotographerTextContext.Provider>
  );
};

export const usePhotographer = () => {
  return useContext(PhotographerTextContext);
};
