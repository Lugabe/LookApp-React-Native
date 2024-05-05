import React, { createContext, useState } from 'react';

const ContextProvider = ({ children }) => {

  const [user, setUser] = useState({})

  return <AppContext.Provider 
    value={{user,setUser }}>{children}</AppContext.Provider>;
};

export const AppContext = createContext({});

export default ContextProvider;
