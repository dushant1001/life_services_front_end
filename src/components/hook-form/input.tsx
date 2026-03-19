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
        {/* Left Icon */}
        {leftIcon && <View style={styles.iconLeft}>{leftIcon}</View>}

        {/* Input */}
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

        {/* Right Icon */}
        {rightIcon && <View style={styles.iconRight}>{rightIcon}</View>}
      </View>

      {/* Error */}
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  focused: {
    borderColor: "#007AFF",
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
