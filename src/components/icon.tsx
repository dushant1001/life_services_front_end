import {
  AntDesign,
  Feather,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import React from "react";

type IconType = "ion" | "material" | "feather" | "ant";

type Props = {
  type?: IconType;
  name: any;
  size?: number;
  color?: string;
};

const Icon = ({ type = "ion", name, size = 20, color = "black" }: Props) => {
  switch (type) {
    case "material":
      return <MaterialIcons name={name} size={size} color={color} />;
    case "feather":
      return <Feather name={name} size={size} color={color} />;
    case "ant":
      return <AntDesign name={name} size={size} color={color} />;
    default:
      return <Ionicons name={name} size={size} color={color} />;
  }
};

export default Icon;
