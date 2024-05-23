import Home from "../screens/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import User from "../screens/User";
import Configurations from "../screens/Configurations";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

export const DrawerRoutes = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerActiveTintColor: "#fff",
        drawerInactiveTintColor: "#252525",
        drawerActiveBackgroundColor: "green",
        drawerInactiveBackgroundColor: "red",
        drawerStyle: {
          backgroundColor: "#252525",
        },
        headerStyle: {
          backgroundColor: "#252525",
        },
        headerTintColor: "#fff",
      }}
    >
      <Drawer.Screen
        name="Configurations"
        component={Configurations}
        options={{
          title: "Configurações",
          drawerIcon: () => <Feather name="settings" size={30} color="white" />,
        }}
      />
      <Drawer.Screen
        name="User"
        component={User}
        options={{
          drawerIcon: () => <Feather name="user" size={30} color="white" />,
        }}
      />
    </Drawer.Navigator>
  );
};
