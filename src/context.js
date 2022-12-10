import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

export const ContextProvider = ({ children }) => {

    const[Balance,setBalance]=useState("0")
  return (
    <StateContext.Provider value={{Balance,setBalance}}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);