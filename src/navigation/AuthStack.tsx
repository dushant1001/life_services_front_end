import {
  ForgetPasswordScreen,
  LoginScreen,
  ResetPasswordScreen,
  SignUpScreen,
  VerifyOtpScreen,
} from "@/src/screens/auth";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { colors } from "../constants/colors";
import { Routes } from "./constants";
import { AuthStackParamList } from "./types";

const Stack = createNativeStackNavigator<AuthStackParamList>();

export default function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: colors.neutral.white },
      }}
    >
      <Stack.Screen name={Routes.LOGIN} component={LoginScreen} />
      <Stack.Screen name={Routes.SIGNUP} component={SignUpScreen} />

      <Stack.Screen
        name={Routes.FORGET_PASSWORD}
        component={ForgetPasswordScreen}
      />
      <Stack.Screen name={Routes.VERIFY_OTP} component={VerifyOtpScreen} />
      <Stack.Screen
        name={Routes.RESET_PASSWORD}
        component={ResetPasswordScreen}
      />
    </Stack.Navigator>
  );
}
