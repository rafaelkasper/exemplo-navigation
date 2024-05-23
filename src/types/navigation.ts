import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { User } from "./user";

export type ScreenParamList = {
  Login: undefined;
  Home: User;
};

export type LoginStackProps = NativeStackScreenProps<ScreenParamList, "Login">;
export type HomeStackProps = NativeStackScreenProps<ScreenParamList, "Home">;
