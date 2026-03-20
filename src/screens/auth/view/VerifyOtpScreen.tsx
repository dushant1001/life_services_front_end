import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Text, View } from "react-native";
import { ScaledSheet } from "react-native-size-matters";

import Button from "@/src/components/Button";
import Divider from "@/src/components/divider";
import Header from "@/src/components/header";
import FormProvider from "@/src/components/hook-form/form-provider";
import Spacing from "@/src/components/spacing";
import { String } from "@/src/constants/string";
import { Routes } from "@/src/navigation/constants";
import { AuthStackParamList } from "@/src/navigation/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { CodeField, Cursor } from "react-native-confirmation-code-field";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { VerifyOtpFormValues } from "../type";
import { schemaVerifyOtp } from "../validation";

export default function VerifyOtpScreen() {
  const methods = useForm<VerifyOtpFormValues>({
    resolver: yupResolver(schemaVerifyOtp),
    defaultValues: {
      otp: "",
    },
    mode: "onTouched",
  });

  const { handleSubmit, control } = methods;

  type NavigationType = NativeStackNavigationProp<
    AuthStackParamList,
    typeof Routes.VERIFY_OTP
  >;

  const navigation = useNavigation<NavigationType>();

  const onSubmit = (data: VerifyOtpFormValues) => {
    console.log("OTP Data:", data);

    // Navigate to Reset Password
    navigation.navigate(Routes.RESET_PASSWORD);
  };

  return (
    <>
      <Header
        title={String.auth.verifyOtp}
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
            <Text style={styles.title}>
              {String.auth.enterOtp || "Enter OTP"}
            </Text>

            <Spacing bottom={20} />

            {/* OTP INPUT */}
            <Controller
              control={control}
              name="otp"
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <>
                  <CodeField
                    value={value}
                    onChangeText={onChange}
                    cellCount={6}
                    keyboardType="number-pad"
                    textContentType="oneTimeCode"
                    rootStyle={styles.codeFieldRoot}
                    renderCell={({ index, symbol, isFocused }) => (
                      <Text
                        key={index}
                        style={[styles.cell, isFocused && styles.focusCell]}
                      >
                        {symbol || (isFocused ? <Cursor /> : null)}
                      </Text>
                    )}
                  />

                  {error && (
                    <Text style={styles.errorText}>{error.message}</Text>
                  )}
                </>
              )}
            />

            <Spacing bottom={30} />

            <Button
              label={String.button.verifyOtp}
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
  },

  title: {
    fontSize: "22@ms",
    fontWeight: "600",
    textAlign: "center",
  },

  codeFieldRoot: {
    justifyContent: "center",
    marginTop: "10@ms",
  },

  cell: {
    width: "45@ms",
    height: "50@ms",
    lineHeight: "50@ms",
    fontSize: "20@ms",
    borderWidth: 1,
    borderRadius: "8@ms",
    textAlign: "center",
    marginHorizontal: "5@ms",
    borderColor: "#ccc",
  },

  focusCell: {
    borderColor: "#000",
  },

  errorText: {
    color: "red",
    marginTop: "8@ms",
    textAlign: "center",
  },
});
