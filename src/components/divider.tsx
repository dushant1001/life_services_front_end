import React from "react";
import { View, ViewStyle } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import { colors } from "../constants/colors";

type DividerProps = {
  color?: string;
  thickness?: number;
  marginVertical?: number;
  marginHorizontal?: number;
  style?: ViewStyle;
};

const Divider: React.FC<DividerProps> = ({
  color = colors.neutral.s250,
  thickness = 1,
  marginHorizontal = 0,
  style,
}) => {
  return (
    <View
      style={[
        styles.divider,
        {
          backgroundColor: color,
          height: thickness,
          marginHorizontal,
        },
        style,
      ]}
    />
  );
};

export default Divider;

const styles = ScaledSheet.create({
  divider: {
    width: "100%",
  },
});
