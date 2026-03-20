import { colors } from "@/src/constants/colors";
import React, { useState } from "react";
import {
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type Option = {
  label: string;
  value: string;
};

type Props = {
  value?: string;
  onChange: (value: string) => void;
  options: Option[];
  placeholder?: string;
  error?: string;

  leftIcon?: React.ReactNode; // ✅ added
  rightIcon?: React.ReactNode; // ✅ added
};

const Select = ({
  value,
  onChange,
  options,
  placeholder,
  error,
  leftIcon,
  rightIcon,
}: Props) => {
  const [visible, setVisible] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const selected = options.find((o) => o.value === value);

  return (
    <View style={{ marginBottom: 15 }}>
      {/* Input Style Select */}
      <TouchableOpacity
        style={[
          styles.container,
          isFocused && styles.focused,
          error && styles.errorBorder,
        ]}
        onPress={() => {
          setVisible(true);
          setIsFocused(true);
        }}
        activeOpacity={0.7}
      >
        {/* Left Icon */}
        {leftIcon && <View style={styles.iconLeft}>{leftIcon}</View>}

        {/* Text */}
        <Text style={[styles.text, { color: selected ? "#000" : "#999" }]}>
          {selected?.label || placeholder || "Select"}
        </Text>

        {/* Right Icon */}
        {rightIcon && <View style={styles.iconRight}>{rightIcon}</View>}
      </TouchableOpacity>

      {/* Bottom Modal */}
      <Modal
        visible={visible}
        transparent
        animationType="slide"
        onRequestClose={() => {
          setVisible(false);
          setIsFocused(false);
        }}
      >
        <View style={styles.overlay}>
          <View style={styles.sheet}>
            <FlatList
              data={options}
              keyExtractor={(item) => item.value}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.option}
                  onPress={() => {
                    onChange(item.value);
                    setVisible(false);
                    setIsFocused(false);
                  }}
                >
                  <Text style={styles.optionText}>{item.label}</Text>
                </TouchableOpacity>
              )}
            />

            <TouchableOpacity
              onPress={() => {
                setVisible(false);
                setIsFocused(false);
              }}
            >
              <Text style={styles.cancel}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Error */}
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

export default Select;

// ================= STYLES =================
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.neutral.s400,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 12,
  },
  focused: {
    borderColor: colors.primary.brand,
  },
  errorBorder: {
    borderColor: "red",
  },
  text: {
    flex: 1,
  },
  iconLeft: {
    marginRight: 8,
  },
  iconRight: {
    marginLeft: 8,
  },

  // Modal
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  sheet: {
    backgroundColor: "#fff",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  option: {
    paddingVertical: 15,
  },
  optionText: {
    fontSize: 16,
  },
  cancel: {
    textAlign: "center",
    marginTop: 10,
    color: "red",
  },
  errorText: {
    color: "red",
    marginTop: 5,
  },
});
