import React from "react";

import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

type IconType = "ion" | "material" | "feather" | "ant";

type Props = {
  type?: IconType;
  name: string;
  size?: number;
  color?: string;
};

const Icon: React.FC<Props> = ({
  type = "ion",
  name,
  size = 20,
  color = "black",
}) => {
  switch (type) {
    case "material":
      return <MaterialIcons name={name as any} size={size} color={color} />;

    case "feather":
      return <Feather name={name as any} size={size} color={color} />;

    case "ant":
      return <AntDesign name={name as any} size={size} color={color} />;

    case "ion":
    default:
      return <Ionicons name={name as any} size={size} color={color} />;
  }
};

export default Icon;
