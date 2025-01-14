import React, { createContext, useState, useEffect } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // localStorage.clear();

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    setLocalStorage()
    try {
      const { employees } = getLocalStorage();
      if (employees ) {
        setUserData( employees );
      } else {
        console.warn("No data found in localStorage.");
      }
    } catch (error) {
      console.error("Error accessing local storage:", error);
    }
  }, []);

  return (
    <AuthContext.Provider value={[userData, setUserData]}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
