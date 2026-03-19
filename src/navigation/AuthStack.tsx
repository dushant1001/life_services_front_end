import {
  ForgetPasswordScreen,
  LoginScreen,
  ResetPasswordScreen,
  SignUpScreen,
  VerifyOtpScreen,
} from "@/src/screens/auth";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Routes } from "./constants";

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
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
