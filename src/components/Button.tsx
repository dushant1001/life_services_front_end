import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import { colors } from "../constants/colors";

type ButtonProps = {
  label: string;
  variant?: "gradient" | "primary" | "outline";
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onPress?: () => void;
  style?: any;
  textStyle?: any;
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  label,
  variant = "primary",
  leftIcon,
  rightIcon,
  onPress,
  style,
  textStyle,
  disabled = false,
}) => {
  const isGradient = variant === "gradient";

  const Content = () => (
    <>
      {leftIcon && <View style={styles.icon}>{leftIcon}</View>}

      <Text style={[styles.text, styles[`${variant}Text`], textStyle]}>
        {label}
      </Text>

      {rightIcon && <View style={styles.icon}>{rightIcon}</View>}
    </>
  );

  // ✅ Gradient Button
  if (isGradient) {
    return (
      <TouchableOpacity
        onPress={disabled ? undefined : onPress}
        activeOpacity={0.7}
        disabled={disabled}
        style={disabled && styles.disabled}
      >
        <LinearGradient
          colors={colors.gradients.primary as [string, string]} // ✅ FIXED
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={[styles.button, style]}
        >
          <Content />
        </LinearGradient>
      </TouchableOpacity>
    );
  }

  // ✅ Normal Button
  return (
    <TouchableOpacity
      style={[
        styles.button,
        styles[variant],
        disabled && styles.disabled,
        style,
      ]}
      onPress={disabled ? undefined : onPress}
      activeOpacity={0.7}
      disabled={disabled}
    >
      <Content />
    </TouchableOpacity>
  );
};

export default Button;

const styles = ScaledSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: "12@ms",
    paddingHorizontal: "16@ms",
    borderRadius: "8@ms",
  },

  primary: {
    backgroundColor: colors.secondary.main,
  },

  outline: {
    borderWidth: 1,
    borderColor: colors.primary.brand,
    backgroundColor: "transparent",
  },

  text: {
    fontSize: "16@ms",
    fontWeight: "600",
  },

  primaryText: {
    color: colors.neutral.white,
  },

  outlineText: {
    color: colors.primary.brand,
  },

  gradientText: {
    color: colors.neutral.white,
  },

  icon: {
    marginHorizontal: "5@ms",
  },

  disabled: {
    opacity: 0.5,
  },
});
