import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { LoginStackProps } from "../types/navigation";
import { User } from "../types/user";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const userData: User = {
    name: "Rafael",
    job: "Desenvolvedor React Native",
  };

  const navigation = useNavigation<any>();

  const openHome = () => {
    navigation.navigate("Home", userData);
  };

  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <TouchableOpacity style={styles.button} onPress={openHome}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  button: {
    width: "90%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 15,
    backgroundColor: "green",
    padding: 5,
  },
  buttonText: {
    fontSize: 24,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ccc",
  },
});
