// SubHeaderContext.js

import React, { createContext, useContext, useState } from "react";

const SubHeaderContext = createContext();

export const SubHeaderProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const setCategory = (category) => {
    setSelectedCategory(category);
  };

  return (
    <SubHeaderContext.Provider value={{ selectedCategory, setCategory }}>
      {children}
    </SubHeaderContext.Provider>
  );
};

export const useSubHeader = () => {
  return useContext(SubHeaderContext);
};
