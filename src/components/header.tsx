import React from "react";
import {
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import { colors } from "../constants/colors";
import Icon from "./icon";

type IconType = "ion" | "material" | "feather" | "ant";

interface HeaderProps {
  title?: string;

  // Icon configs
  leftIconName?: string;
  rightIconName?: string;
  middleIconName?: string;

  leftIconType?: IconType;
  rightIconType?: IconType;
  middleIconType?: IconType;

  // Actions
  onLeftPress?: () => void;
  onRightPress?: () => void;

  // Styling
  containerStyle?: ViewStyle;
  titleStyle?: TextStyle;

  // Icon styling
  iconSize?: number;
  iconColor?: string;

  static?: boolean;
}

const Header: React.FC<HeaderProps> = ({
  title,
  leftIconName,
  rightIconName,
  middleIconName,

  leftIconType = "ion",
  rightIconType = "ion",
  middleIconType = "ion",

  onLeftPress,
  onRightPress,

  containerStyle,
  titleStyle,

  iconSize = 25,
  iconColor = colors.primary.brand,

  static: isStatic = false,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.side}>
        {leftIconName &&
          (isStatic ? (
            <Icon
              type={leftIconType}
              name={leftIconName}
              size={iconSize}
              color={iconColor}
            />
          ) : (
            <TouchableOpacity onPress={onLeftPress} activeOpacity={0.7}>
              <Icon
                type={leftIconType}
                name={leftIconName}
                size={iconSize}
                color={iconColor}
              />
            </TouchableOpacity>
          ))}
      </View>
      <View style={styles.middle}>
        {middleIconName ? (
          <Icon
            type={middleIconType}
            name={middleIconName}
            size={iconSize}
            color={iconColor}
          />
        ) : (
          <Text style={[styles.title, titleStyle]} numberOfLines={1}>
            {title}
          </Text>
        )}
      </View>

      {/* RIGHT */}
      <View style={styles.side}>
        {rightIconName &&
          (isStatic ? (
            <Icon
              type={rightIconType}
              name={rightIconName}
              size={iconSize}
              color={iconColor}
            />
          ) : (
            <TouchableOpacity onPress={onRightPress} activeOpacity={0.7}>
              <Icon
                type={rightIconType}
                name={rightIconName}
                size={iconSize}
                color={iconColor}
              />
            </TouchableOpacity>
          ))}
      </View>
    </View>
  );
};

export default Header;

const styles = ScaledSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: "6@ms",
    paddingBottom: "10@ms",
  },
  side: {
    width: "40@s",
    alignItems: "center",
    justifyContent: "center",
  },
  middle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: "22@ms",
    fontWeight: "600",
    color: "#000",
  },
});
