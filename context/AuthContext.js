import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    checkLoginStatus();
  }, []);

  const checkLoginStatus = async () => {
    try {
      const value = await AsyncStorage.getItem('isLoggedIn');
      if (value !== null) {
        setIsLoggedIn(JSON.parse(value));
      }
    } catch (error) {
      console.error('Error reading login status:', error);
    }
  };

  const login = async () => {
    try {
      await AsyncStorage.setItem('isLoggedIn', JSON.stringify(true));
      setIsLoggedIn(true);
    } catch (error) {
      console.error('Error saving login status:', error);
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.setItem('isLoggedIn', JSON.stringify(false));
      setIsLoggedIn(false);
    } catch (error) {
      console.error('Error saving login status:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};