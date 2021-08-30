import React, { useState } from "react";
import { Text, Input, Button } from "react-native-elements";
import { StyleSheet } from "react-native";
import HorSpacer from "./HorSpacer";
import Spacer from "./Spacer";

const AuthForm = ({ headerText, errorMessage, onSubmitCallback, btnTitle }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <Spacer>
        <Text style={styles.Heading} h3>
          {headerText}
        </Text>
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
        {errorMessage ? (
          <Text style={styles.errMessage} h5>
            {errorMessage}
          </Text>
        ) : null}
        <Button
          titleStyle={{ fontSize: 22, textAlign: "center" }}
          buttonStyle={{ marginTop: 20 }}
          onPress={() => onSubmitCallback({ email, password })}
          title={btnTitle}
        />
      </HorSpacer>
    </>
  );
};

export default AuthForm;

const styles = StyleSheet.create({
  Heading: {
    fontWeight: "bold",
    color: "#353b48",
  },
  errMessage: {
    color: "#e74c3c",
    textAlign: "center",
  },
});
