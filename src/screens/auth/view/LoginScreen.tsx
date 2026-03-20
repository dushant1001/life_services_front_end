import { Ionicons } from "@expo/vector-icons";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation } from "@react-navigation/native";
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
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { LoginFormValues } from "../type";
import { schemaLogin } from "../validation";

export default function LoginScreen() {
  const methods = useForm<LoginFormValues>({
    resolver: yupResolver(schemaLogin),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onTouched",
  });

  const { handleSubmit } = methods;
  type NavigationType = NativeStackNavigationProp<
    AuthStackParamList,
    typeof Routes.LOGIN
  >;

  const navigation = useNavigation<NavigationType>();
  const onSubmit = (data: LoginFormValues) => {
    console.log("Login Data:", data);
  };

  const handelForget = () => {
    navigation.navigate(Routes.FORGET_PASSWORD);
  };

  return (
    <>
      <Header
        title={String.auth.login}
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
              <Text style={globalStyles.title}>{String.auth.welcomeBack}</Text>
              <Text style={globalStyles.subtitle}>
                {String.auth.gladToSeeYouAgain}
              </Text>
            </View>

            <Spacing bottom={10} />

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

            <TouchableOpacity
              style={globalStyles.itemsEnd}
              onPress={handelForget}
            >
              <Text style={globalStyles.primaryStyle}>
                {String.auth.forgetPassword}
              </Text>
            </TouchableOpacity>

            <Button
              label={String.button.login}
              onPress={handleSubmit(onSubmit)}
            />
          </View>
        </FormProvider>
      </KeyboardAwareScrollView>

      <View
        style={[globalStyles.row, globalStyles.justifyCenter, globalStyles.p15]}
      >
        <Text>{String.auth.dontHaveAccount}</Text>
        <TouchableOpacity onPress={() => navigation.navigate(Routes.SIGNUP)}>
          <Text style={globalStyles.primaryStyle}>{String.auth.signUp}</Text>
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
