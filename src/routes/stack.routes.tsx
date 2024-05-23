import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ScreenParamList } from "../types/navigation";
import Login from "../screens/Login";
import Home from "../screens/Home";

// const {Navigator, Screen} = createNativeStackNavigator<ScreenParamList>()

const Stack = createNativeStackNavigator<ScreenParamList>();

export const StackRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: "Tela Inicial",
          statusBarColor: "#252525",
          headerTintColor: "red",
        }}
      />
    </Stack.Navigator>
  );
};
