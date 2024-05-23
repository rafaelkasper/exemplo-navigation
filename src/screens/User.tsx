import { StyleSheet, Text, View } from "react-native";
import React from "react";

const User = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>User</Text>
    </View>
  );
};

export default User;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 22,
  },
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
});
