import { colors } from "@/src/constants/colors";
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export interface InputProps {
  value?: string;
  onChangeText?: (text: string) => void;
  onBlur?: () => void;

  placeholder?: string;
  secureTextEntry?: boolean;

  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;

  error?: string;
}

const Input = ({
  value,
  onChangeText,
  onBlur,
  placeholder,
  secureTextEntry,
  leftIcon,
  rightIcon,
  error,
}: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={{ marginBottom: 15 }}>
      <View
        style={[
          styles.container,
          isFocused && styles.focused,
          error && styles.errorBorder,
        ]}
      >
        {leftIcon && <View style={styles.iconLeft}>{leftIcon}</View>}

        <TextInput
          value={value}
          onChangeText={onChangeText}
          onBlur={() => {
            setIsFocused(false);
            onBlur?.();
          }}
          onFocus={() => setIsFocused(true)}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          style={styles.input}
        />

        {rightIcon && <View style={styles.iconRight}>{rightIcon}</View>}
      </View>

      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1.5,
    borderColor: colors.neutral.s400,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  focused: {
    borderColor: colors.primary.brand,
  },
  errorBorder: {
    borderColor: "red",
  },
  input: {
    flex: 1,
    paddingVertical: 10,
  },
  iconLeft: {
    marginRight: 8,
  },
  iconRight: {
    marginLeft: 8,
  },
  errorText: {
    color: "red",
    marginTop: 4,
  },
});
