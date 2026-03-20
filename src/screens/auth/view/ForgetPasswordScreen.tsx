import { Ionicons } from "@expo/vector-icons";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useForm } from "react-hook-form";
import { View } from "react-native";
import { ScaledSheet } from "react-native-size-matters";

import Button from "@/src/components/Button";
import Divider from "@/src/components/divider";
import Header from "@/src/components/header";
import RHFInput from "@/src/components/hook-form/RHF-Input";
import FormProvider from "@/src/components/hook-form/form-provider";
import Spacing from "@/src/components/spacing";
import { colors } from "@/src/constants/colors";
import { String } from "@/src/constants/string";
import { Routes } from "@/src/navigation/constants";
import { AuthStackParamList } from "@/src/navigation/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { ForgetPasswordFormValues } from "../type";
import { schemaForgetPassword } from "../validation";

export default function ForgetPasswordScreen() {
  const methods = useForm<ForgetPasswordFormValues>({
    resolver: yupResolver(schemaForgetPassword),
    defaultValues: {
      email: "",
    },
    mode: "onTouched",
  });

  const { handleSubmit } = methods;
  type NavigationType = NativeStackNavigationProp<
    AuthStackParamList,
    typeof Routes.FORGET_PASSWORD
  >;

  const navigation = useNavigation<NavigationType>();
  const onSubmit = (data: ForgetPasswordFormValues) => {
    console.log("Login Data:", data);
    navigation.navigate(Routes.VERIFY_OTP);
  };

  return (
    <>
      <Header
        title={String.auth.forgetPassword}
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
            <Spacing bottom={10} />

            <RHFInput
              name="email"
              placeholder={String.auth.email}
              leftIcon={
                <Ionicons name="mail" size={20} color={colors.neutral.s300} />
              }
            />

            <Button
              label={String.button.sendOtp}
              onPress={handleSubmit(onSubmit)}
            />
          </View>
        </FormProvider>
      </KeyboardAwareScrollView>

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
