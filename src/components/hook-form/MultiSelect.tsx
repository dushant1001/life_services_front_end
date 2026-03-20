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
  value?: string[];
  onChange: (value: string[]) => void;
  options: Option[];
  placeholder?: string;
  error?: string;

  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
};

const MultiSelect = ({
  value = [],
  onChange,
  options,
  placeholder,
  error,
  leftIcon,
  rightIcon,
}: Props) => {
  const [visible, setVisible] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const toggleItem = (val: string) => {
    if (value.includes(val)) {
      onChange(value.filter((v) => v !== val));
    } else {
      onChange([...value, val]);
    }
  };

  const selectedLabels = options
    .filter((o) => value.includes(o.value))
    .map((o) => o.label)
    .join(", ");

  return (
    <View style={{ marginBottom: 15 }}>
      {/* Input */}
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
      >
        {leftIcon && <View style={styles.iconLeft}>{leftIcon}</View>}

        <Text style={{ flex: 1, color: value.length ? "#000" : "#999" }}>
          {selectedLabels || placeholder || "Select"}
        </Text>

        {rightIcon && <View style={styles.iconRight}>{rightIcon}</View>}
      </TouchableOpacity>

      {/* Modal */}
      <Modal visible={visible} transparent animationType="slide">
        <View style={styles.overlay}>
          <View style={styles.sheet}>
            <FlatList
              data={options}
              keyExtractor={(item) => item.value}
              renderItem={({ item }) => {
                const selected = value.includes(item.value);

                return (
                  <TouchableOpacity
                    style={styles.option}
                    onPress={() => toggleItem(item.value)}
                  >
                    <Text style={{ flex: 1 }}>{item.label}</Text>
                    {selected && <Text>✓</Text>}
                  </TouchableOpacity>
                );
              }}
            />

            <TouchableOpacity
              onPress={() => {
                setVisible(false);
                setIsFocused(false);
              }}
            >
              <Text style={styles.done}>Done</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

export default MultiSelect;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 12,
  },
  focused: { borderColor: "#007AFF" },
  errorBorder: { borderColor: "red" },
  iconLeft: { marginRight: 8 },
  iconRight: { marginLeft: 8 },

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
    flexDirection: "row",
    paddingVertical: 15,
  },
  done: {
    textAlign: "center",
    marginTop: 10,
    color: "#007AFF",
    fontWeight: "bold",
  },
  errorText: {
    color: "red",
    marginTop: 5,
  },
});
