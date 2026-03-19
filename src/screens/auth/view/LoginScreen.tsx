import RHFInput from "@/src/components/hook-form/RHF-Input";
import FormProvider from "@/src/components/hook-form/form-provider";
import { Ionicons } from "@expo/vector-icons";
import { useForm } from "react-hook-form";
import { Button, StyleSheet, Text, View } from "react-native";

type LoginFormValues = {
  email: string;
  password: string;
};

export default function LoginScreen() {
  const methods = useForm<LoginFormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <FormProvider methods={methods}>
      <View style={styles.container}>
        <Text style={styles.text}>Login Screen</Text>

        <RHFInput<LoginFormValues>
          name="email"
          placeholder="Email"
          leftIcon={<Ionicons name="mail" size={20} color="gray" />}
        />

        <RHFInput<LoginFormValues>
          name="password"
          placeholder="Password"
          secureTextEntry
          leftIcon={<Ionicons name="lock-closed" size={20} color="gray" />}
        />

        <Button
          title="Submit"
          onPress={methods.handleSubmit((data) => {
            console.log("FORM DATA:", data);
          })}
        />
      </View>
    </FormProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 20,
    textAlign: "center",
  },
});
