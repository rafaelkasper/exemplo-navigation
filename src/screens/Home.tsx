import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { User } from "../types/user";
import { HomeStackProps } from "../types/navigation";

const Home = ({ route }: HomeStackProps) => {
  const navigation = useNavigation();
  // const route = useRoute();
  // const { name, job } = route.params as User;

  const goBack = () => {
    // navigation.goBack();
    console.log("goBack");
  };
  return (
    <View style={styles.container}>
      <Text> Home</Text>
      {/*

     
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.text}>{job}</Text>

      <TouchableOpacity style={styles.button} onPress={goBack}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
       */}
    </View>
  );
};

export default Home;

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
