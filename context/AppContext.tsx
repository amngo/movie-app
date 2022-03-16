import React, { createContext, useState } from 'react';

export const AppCtx = createContext(null);

export const Provider = ({ children }) => {
  const [userData, setUserData] = useState({
    watchlist: [],
    favorites: [],
    session: null,
  });

  return (
    <AppCtx.Provider
      value={{
        userData,
        setUserData,
      }}
    >
      {children}
    </AppCtx.Provider>
  );
};
