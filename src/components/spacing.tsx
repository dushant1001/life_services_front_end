import React from "react";
import { View, ViewStyle } from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

type SpaceProps = {
  size?: number;

  // directions
  vertical?: number;
  horizontal?: number;

  top?: number;
  bottom?: number;
  left?: number;
  right?: number;

  // mode
  type?: "margin" | "padding";

  style?: ViewStyle;
};

const Spacing: React.FC<SpaceProps> = ({
  size = 0,

  vertical,
  horizontal,

  top,
  bottom,
  left,
  right,

  type = "margin",
  style,
}) => {
  // base value
  const scaled = moderateScale(size);

  const styles: ViewStyle = {};

  // vertical / horizontal
  if (vertical !== undefined) {
    styles[`${type}Top`] = verticalScale(vertical);
    styles[`${type}Bottom`] = verticalScale(vertical);
  }

  if (horizontal !== undefined) {
    styles[`${type}Left`] = scale(horizontal);
    styles[`${type}Right`] = scale(horizontal);
  }

  // individual sides override
  if (top !== undefined) styles[`${type}Top`] = verticalScale(top);
  if (bottom !== undefined) styles[`${type}Bottom`] = verticalScale(bottom);
  if (left !== undefined) styles[`${type}Left`] = scale(left);
  if (right !== undefined) styles[`${type}Right`] = scale(right);

  // fallback (all sides)
  if (size && !vertical && !horizontal && !top && !bottom && !left && !right) {
    styles[`${type}`] = scaled;
  }

  return <View style={[styles, style]} />;
};

export default Spacing;
