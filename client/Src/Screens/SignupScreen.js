import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Text, Button, Input } from "react-native-elements";
import Spacer from "../components/Spacer";
import HorSpacer from "../components/HorSpacer";

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3>Sign Up for Tracker</Text>
      </Spacer>
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
        <Button
          titleStyle={{ fontSize: 22, textAlign: "center" }}
          onPress={() => {
            navigation.navigate("SignIn");
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
});
