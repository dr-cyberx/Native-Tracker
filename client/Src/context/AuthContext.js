import React, { useReducer, createContext } from "react";
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

    default:
      break;
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    token: null,
    errMessage: "",
  });

  const signup = async ({ email, password }, callback) => {
    try {
      const response = await tracker.post("/signup", { email, password });
      // console.log(resonse)
      console.log("try chla");
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: "signup", payload: response.data.token });

      if (callback) {
        callback();
      }
    } catch (err) {
      console.log("try ka catch bhi chla");
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

  const signout = () => {};

  const clearErrorMessage = () => {
    dispatch({ type: "clear_Error_Message" });
  };

  const localSignIn = async (callback) => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      dispatch({ type: "signup", payload: token });
      if (callback) {
        callback();
      }
    }
  };

  return (
    <AuthContext.Provider
      value={{ signin, signup, signout, state, clearErrorMessage, localSignIn }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
