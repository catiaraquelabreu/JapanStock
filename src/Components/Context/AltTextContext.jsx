import React, { createContext, useContext, useState } from "react";

const AltTextContext = createContext();

export const AltTextProvider = ({ children }) => {
  const [selectedAltText, setSelectedAltText] = useState(null);

  const setSelectedAlt = (alt) => {
    setSelectedAltText(alt);
  };

  return (
    <AltTextContext.Provider value={{ selectedAltText, setSelectedAlt }}>
      {children}
    </AltTextContext.Provider>
  );
};

export const useAltText = () => {
  return useContext(AltTextContext);
};
