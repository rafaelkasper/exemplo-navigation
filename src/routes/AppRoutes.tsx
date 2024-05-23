import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Feather } from "@expo/vector-icons";
import { ScreenParamList } from "../types/navigation";
import Home from "../screens/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Configurations from "../screens/Configurations";
import User from "../screens/User";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Stack = createNativeStackNavigator<ScreenParamList>();

const StackRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: "Tela Inicial",
          statusBarColor: "#252525",
          headerTintColor: "red",
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const TabRoutes = () => {
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
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Initial"
        component={StackRoutes}
        options={{
          tabBarIcon: () => <Feather name="home" size={30} color="white" />,
        }}
      />
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

const Drawer = createDrawerNavigator();

const DrawerRoutes = () => {
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
        name="InitialHome"
        component={TabRoutes}
        options={{
          title: "",
          drawerIcon: () => <Feather name="home" size={30} color="white" />,
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

export { DrawerRoutes as AppRoutes };
