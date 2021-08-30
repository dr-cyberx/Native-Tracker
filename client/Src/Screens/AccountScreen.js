import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import AuthContext from "../context/AuthContext";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Text, Button } from "react-native-elements";
import Spacer from "../components/Spacer";

const AccountScreen = ({ navigation }) => {
  const { signout } = useContext(AuthContext);
  return (
    <SafeAreaView style={{marginTop: 25, paddingHorizontal: 25}} edges={["top", "right", "left", "bottom"]}>
      <Text h2  style={{ fontWeight: "bold" }}>
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
    </SafeAreaView>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({});
