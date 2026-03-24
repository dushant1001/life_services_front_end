import { NavigatorScreenParams } from "@react-navigation/native";
import { Routes } from "./constants";

export type BottomTabParamList = {
  [Routes.Home]: undefined;
  [Routes.Activity]: undefined;
  [Routes.History]: undefined;
  [Routes.Profile]: undefined;
};

export type MainStackParamList = {
  Tabs: NavigatorScreenParams<BottomTabParamList>;
};
export type AuthStackParamList = {
  [Routes.LOGIN]: undefined;
  [Routes.SIGNUP]: undefined;
  [Routes.FORGET_PASSWORD]: undefined;
  [Routes.VERIFY_OTP]: undefined;
  [Routes.RESET_PASSWORD]: undefined;
};
