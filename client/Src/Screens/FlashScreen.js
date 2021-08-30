import React, { useContext, useEffect } from "react";
import AuthContext from "../context/AuthContext";
import { StyleSheet, Text, View } from "react-native";

const FlashScreen = ({ navigation }) => {
  const { localSignIn } = useContext(AuthContext);

  useEffect(() => {
    localSignIn(() => {
      navigation.navigate("Home");
    });
  }, []);
  return null;
};

export default FlashScreen;

const styles = StyleSheet.create({});
