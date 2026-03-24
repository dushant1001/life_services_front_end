import { LinearGradient } from "expo-linear-gradient";
import { ReactNode } from "react";
import { StyleSheet } from "react-native";
import { colors } from "../constants/colors";

type Props = {
  children: ReactNode;
};

export default function ScreenWrapper({ children }: Props) {
  return (
    <LinearGradient
      colors={[
        colors.neutral.white,
        colors.secondary.light,
        colors.primary.brand,
      ]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      {children}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
