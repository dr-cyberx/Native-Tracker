import React, { useReducer, createContext } from "react";
import tracker from "../api/tracker";

const AuthContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "add_Error":
      return {
        ...state,
        errMessage: action.payload,
      };
    default:
      break;
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    isSignedIn: false,
    errMessage: "",
  });

  const signup = async (email, password ) => {

    try {
      const response = await tracker.post("/signup", { email, password });
      // console.log(resonse)
      console.log('try chla')
    } catch (err) {
      console.log('try ka catch bhi chla')
      // console.log("failed to signup:", err);
      dispatch({
        type: "add_Error",
        payload: "Something went wrong while Sign up",
      });
    }

  };
  const signin = ({ email, password }) => {};
  const signout = () => {};

  return (
    <AuthContext.Provider value={{ signin, signup, signout, state }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
