import Home from "../screens/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import User from "../screens/User";
import Configurations from "../screens/Configurations";

const Tab = createBottomTabNavigator();

export const TabRoutes = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveBackgroundColor: "green",
        tabBarInactiveBackgroundColor: "red",
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "yellow",
        tabBarLabelStyle: {
          fontSize: 20,
          fontWeight: "bold",
        },
        tabBarStyle: {
          height: 80,
        },
      }}
    >
      <Tab.Screen
        name="Configurations"
        component={Configurations}
        options={{
          tabBarIcon: () => <Feather name="settings" size={30} color="white" />,
        }}
      />
      <Tab.Screen
        name="User"
        component={User}
        options={{
          tabBarIcon: () => <Feather name="user" size={30} color="white" />,
          tabBarBadge: 5,
        }}
      />
    </Tab.Navigator>
  );
};
