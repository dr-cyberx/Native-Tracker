import React, { useReducer, createContext } from "react";

const AuthContext = createContext();

const reducer = ({ state, action }) => {
  switch (action.type) {
    case 'value':
      break;

    default:
      break;
  }
};

export const authProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);

  return <AuthContext.Provider>{children}</AuthContext.Provider>;
};

export default AuthContext;
