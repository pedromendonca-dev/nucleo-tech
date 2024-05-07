import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);


  const loginUser = (userData) => {
    setUser(userData);
  };

  const logoutUser = () => {
    setUser(null);
  };

  const contextValue = {
    user,
    loginUser,
    logoutUser,
  };

  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};
export const useUser = () => useContext(UserContext);
