import React, { useReducer, createContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import tracker from "../api/tracker";

const AuthContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "add_Error":
      return {
        ...state,
        errMessage: action.payload,
      };

    case "signup":
      return {
        ...state,
        errMessage: "",
        token: action.payload,
      };

    case "clear_Error_Message":
      return {
        ...state,
        errMessage: "",
      };

    case "signout":
      return {
        token: null,
        errMessage: "",
      };

    case "showlogin":
      return {
        ...state,
        showLogin: action.payload,
      };
    default:
      break;
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    token: null,
    errMessage: "",
    showLogin: false,
  });

  const signup = async ({ email, password }, callback) => {
    try {
      const response = await tracker.post("/signup", { email, password });
      // console.log(resonse)
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: "signup", payload: response.data.token });

      if (callback) {
        callback();
      }
    } catch (err) {
      // console.log("failed to signup:", err);
      dispatch({
        type: "add_Error",
        payload: "Something went wrong while Sign up",
      });
    }
  };

  const signin = async ({ email, password }, callback) => {
    try {
      const response = await tracker.post("/signin", { email, password });
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: "signup", payload: response.data.token });
      if (callback) {
        callback();
      }
    } catch (err) {
      dispatch({
        type: "add_Error",
        payload: "Something went wrong while Sign in",
      });
    }
  };

  const signout = async (callback) => {
    await AsyncStorage.removeItem("token");
    dispatch({ type: "signout" });
    if (callback) {
      callback();
    }
  };

  const clearErrorMessage = () => {
    dispatch({ type: "clear_Error_Message" });
  };

  const localSignIn = async (callback) => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      dispatch({ type: "showlogin", payload: false });
      dispatch({ type: "signup", payload: token });
      if (callback) {
        callback();
      }
    } else {
      dispatch({ type: "showlogin", payload: true });
    }
  };

  const showLoginScreen = (callback) => {
    if (callback) {
      callback();
    }
  };

  return (
    <AuthContext.Provider
      value={{ signin, signup, signout, state, clearErrorMessage, localSignIn, showLoginScreen }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
