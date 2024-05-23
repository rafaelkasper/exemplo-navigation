import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { User } from "../types/user";
import { HomeStackProps } from "../types/navigation";

const Configurations = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Configurations</Text>
    </View>
  );
};

export default Configurations;

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
