import React, { createContext, useContext, useState } from "react";

const MediaContext = createContext();

export const MediaProvider = ({ children }) => {
  const [selectedMediaSrc, setSelectedMediaSrc] = useState(null);
  const [selectedMediaAlt, setSelectedMediaAlt] = useState(null);

  const setSelectedMedia = (src) => {
    setSelectedMediaSrc(src);
  };

  const setSelectedAlt = (alt) => {
    setSelectedMediaAlt(alt);
  };

  return (
    <MediaContext.Provider
      value={{
        selectedMediaSrc,
        setSelectedMedia,
        selectedMediaAlt,
        setSelectedAlt,
      }}>
      {children}
    </MediaContext.Provider>
  );
};

export const useMedia = () => {
  return useContext(MediaContext);
};
