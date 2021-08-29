import React, { useState, useContext } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Text, Button, Input } from "react-native-elements";
import Spacer from "../components/Spacer";
import HorSpacer from "../components/HorSpacer";
import AuthContext from "../context/AuthContext";

const SignupScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // console.log(state);

  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3>Sign Up for Tracker</Text>
      </Spacer>
      <Spacer />
      <Input
        label="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Input
        secureTextEntry
        label="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <HorSpacer>
        {state.errMessage.length ? (
          <Text style={styles.errMessage} h4>
            {state.errMessage}
          </Text>
        ) : null}
        <Button
          titleStyle={{ fontSize: 22, textAlign: "center" }}
          buttonStyle={{ marginTop: 20 }}
          onPress={() => {
            // navigation.navigate("SignIn");
            signup(email, password);
          }}
          title="Sign Up"
        />
      </HorSpacer>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 25,
    marginBottom: 200,
  },
  errMessage: {
    color: "#e74c3c",
    textAlign: "center",
  },
});
