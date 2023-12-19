import React, { createContext, useState } from 'react';

export const HoverContext = createContext();

export const HoverProvider = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);

  const value = {
    isHovered,
    setIsHovered,
  };

  return (
    <HoverContext.Provider value={value}>
      {children}
    </HoverContext.Provider>
  );
};
