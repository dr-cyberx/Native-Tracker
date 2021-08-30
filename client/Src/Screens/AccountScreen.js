import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import AuthContext from "../context/AuthContext";
import { Text, Button } from "react-native-elements";
import Spacer from "../components/Spacer";

const AccountScreen = ({ navigation }) => {
  const { signout } = useContext(AuthContext);
  return (
    <>
      <Text h4 style={{ fontWeight: "bold" }}>
        Account Screen
      </Text>
      <Spacer />
      <Button
        onPress={() => {
          signout(() => {
            navigation.navigate("SignIn");
          });
        }}
        title="Sign Out"
      />
    </>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({});
