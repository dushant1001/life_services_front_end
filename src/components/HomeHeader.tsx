import { Text, View } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import { colors } from "../constants/colors";
import Icon from "./icon";

export default function HomeHeader({ name = "User" }) {
  const getGreeting = () => {
    const hour = new Date().getHours();

    if (hour < 12) return "Good Morning";
    if (hour < 17) return "Good Afternoon";
    if (hour < 21) return "Good Evening";
    return "Good Night";
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>{getGreeting()},</Text>
        <Text style={styles.name}>{name}</Text>
      </View>

      <View style={styles.right}>
        <Text style={styles.appName}>MyFitness</Text>
        <Icon name="fitness" size={25} color={colors.primary.brand} />
      </View>
    </View>
  );
}

const styles = ScaledSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: "16@ms",
    paddingTop: "20@ms",
    backgroundColor: "transparent",
  },

  greeting: {
    fontSize: "25@ms",
    color: colors.neutral.black,
    fontWeight: "500",
  },

  name: {
    fontSize: "26@ms",
    fontWeight: "bold",
    color: colors.neutral.black,
  },

  right: {
    flexDirection: "row",
    alignItems: "center",
    gap: "6@ms",
  },

  appName: {
    fontSize: "14@ms",
    color: colors.neutral.s400,
    fontWeight: "500",
  },
});
