import React, { useContext, useEffect } from "react";
import AuthContext from "../context/AuthContext";
import { StyleSheet, Text, View } from "react-native";

const FlashScreen = ({ navigation }) => {
  const { localSignIn, showLoginScreen } = useContext(AuthContext);

  useEffect(() => {
    localSignIn(() => {
      navigation.navigate("Home", { screen: "trackListFlow" });
    });
    showLoginScreen(() => {
      navigation.navigate("SignIn");
    });
  }, []);

  return null;
};

export default FlashScreen;

const styles = StyleSheet.create({});
