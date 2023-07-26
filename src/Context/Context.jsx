// src/context.js
import React, { createContext, useReducer } from 'react';

// Definisikan initial state
const initialState = {
  page: "", // Contoh initial state, Anda dapat mengubahnya sesuai kebutuhan
};

// Buat reducer untuk mengelola state
const reducer = (globalState, action) => {
  switch (action.type) {
    case 'UPDATE_PAGE':
      return { ...globalState, page: action.payload };

    default:
      return globalState;
  }
};

// Buat konteks baru
const GlobalState = createContext();

// Buat Provider untuk konteks menggunakan useReducer
const AppProvider = ({ children }) => {
  const [globalState, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalState.Provider value={{ globalState, dispatch }}>
      {children}
    </GlobalState.Provider>
  );
};

export { GlobalState, AppProvider };
