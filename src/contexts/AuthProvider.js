import React, { createContext } from "react";
import useFirebase from "../hooks/useFirebase";
export const MyContext = createContext(null);

const AuthProvider = ({ children }) => {
  const allProvider = useFirebase();
  return (
    <div>
      <MyContext.Provider value={allProvider}>{children}</MyContext.Provider>
    </div>
  );
};

export default AuthProvider;
