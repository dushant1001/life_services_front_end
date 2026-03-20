import { Ionicons } from "@expo/vector-icons";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { Text, TouchableOpacity, View } from "react-native";
import { ScaledSheet } from "react-native-size-matters";

import Button from "@/src/components/Button";
import Divider from "@/src/components/divider";
import Header from "@/src/components/header";
import RHFInput from "@/src/components/hook-form/RHF-Input";
import FormProvider from "@/src/components/hook-form/form-provider";
import Spacing from "@/src/components/spacing";
import { colors } from "@/src/constants/colors";
import { globalStyles } from "@/src/constants/globalStyles";
import { String } from "@/src/constants/string";
import { Routes } from "@/src/navigation/constants";
import { AuthStackParamList } from "@/src/navigation/types";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SignUpFormValues } from "../type";
import { schemaSignUp } from "../validation";

export default function SignUpScreen() {
  const methods = useForm<SignUpFormValues>({
    resolver: yupResolver(schemaSignUp),
    defaultValues: {
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    mode: "onTouched",
  });
  type NavigationType = NativeStackNavigationProp<
    AuthStackParamList,
    typeof Routes.SIGNUP
  >;

  const navigation = useNavigation<NavigationType>();
  const { handleSubmit } = methods;

  const onSubmit = (data: SignUpFormValues) => {
    console.log("Login Data:", data);
  };

  return (
    <>
      <Header
        title={String.auth.signUp}
        leftIconName="arrow-back-outline"
        onLeftPress={() => navigation.goBack()}
      />
      <Divider />
      <KeyboardAwareScrollView
        enableOnAndroid={true}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <FormProvider methods={methods}>
          <View style={styles.container}>
            <View>
              <Text style={globalStyles.title}>
                {String.auth.createAccount}
              </Text>
              <Text style={globalStyles.subtitle}>
                {String.auth.getStarted}
              </Text>
            </View>

            <Spacing bottom={10} />

            <RHFInput
              name="email"
              placeholder={String.auth.username}
              leftIcon={
                <Ionicons name="person" size={20} color={colors.neutral.s300} />
              }
            />
            <RHFInput
              name="email"
              placeholder={String.auth.email}
              leftIcon={
                <Ionicons name="mail" size={20} color={colors.neutral.s300} />
              }
            />

            <RHFInput
              name="password"
              placeholder={String.auth.password}
              secureTextEntry
              leftIcon={
                <Ionicons
                  name="lock-closed"
                  size={20}
                  color={colors.neutral.s300}
                />
              }
            />
            <RHFInput
              name="confirmPassword"
              placeholder={String.auth.confirmPassword}
              secureTextEntry
              leftIcon={
                <Ionicons
                  name="lock-closed"
                  size={20}
                  color={colors.neutral.s300}
                />
              }
            />

            <Button
              label={String.button.signUp}
              onPress={handleSubmit(onSubmit)}
            />
          </View>
        </FormProvider>
      </KeyboardAwareScrollView>

      <View
        style={[globalStyles.row, globalStyles.justifyCenter, globalStyles.p15]}
      >
        <Text>{String.auth.alreadyHaveAccount}</Text>
        <TouchableOpacity onPress={() => navigation.navigate(Routes.LOGIN)}>
          <Text style={globalStyles.primaryStyle}>{String.auth.login}</Text>
        </TouchableOpacity>
      </View>

      <Spacing bottom={10} />
    </>
  );
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: "20@ms",
    gap: "14@ms",
  },
  title: {
    fontSize: "24@ms",
    fontWeight: "600",
    textAlign: "center",
    marginBottom: "10@ms",
    fontStyle: "italic",
  },
});
