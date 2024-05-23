import { NavigationContainer } from "@react-navigation/native";
import { StackRoutes } from "./stack.routes";
import { TabRoutes } from "./tab.routes";
import { DrawerRoutes } from "./drawer.routes";
import AuthRoutes from "./AuthRoutes";
import { AppRoutes } from "./AppRoutes";

export const Routes = () => {
  const token = true;

  return (
    <NavigationContainer>
      {token ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
};
