import React, { useContext } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Text } from "react-native-elements";
import AuthForm from "../components/AuthForm";
import NavLinks from "../components/NavLinks";
import Spacer from "../components/Spacer";
import AuthContext from "../context/AuthContext";

const SignupScreen = ({ navigation }) => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      clearErrorMessage();
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <AuthForm
        navigation={navigation}
        headerText="Sign Up from Tracker"
        btnTitle="Sign Up"
        errorMessage={state.errMessage}
        onSubmitCallback={({ email, password }) =>
          signup({ email, password }, () => {
            navigation.navigate("Home");
          })
        }
      />

      <Spacer />

      <NavLinks
        HeadTitle="Aready have a Account ?"
        linkText="Sign In here"
        handlePress={() => {
          navigation.navigate("SignIn");
        }}
      />
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
