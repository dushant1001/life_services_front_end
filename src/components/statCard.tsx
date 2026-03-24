import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import { colors } from "../constants/colors";

type Props = {
  title: string;
  value: string;
  unit: string;
  icon: any;
  color: string;
};

export default function StatCard({ title, value, unit, icon, color }: Props) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <Ionicons name={icon} size={16} color={color} />
      </View>

      <View style={styles.valueRow}>
        <Text style={styles.value}>{value}</Text>
        <Text style={styles.unit}>{unit}</Text>
      </View>

      <View style={styles.indicator} />
    </View>
  );
}

const styles = ScaledSheet.create({
  card: {
    flex: 1,
    backgroundColor: colors.neutral.white,
    borderRadius: "16@ms",
    padding: "12@ms",
    marginHorizontal: "4@ms",

    elevation: 4,
    shadowColor: colors.neutral.black,
    shadowOpacity: 0.05,
    shadowRadius: " 6@ms",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    fontSize: "12@ms",
    color: colors.neutral.s450,
  },

  valueRow: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginTop: "10@ms",
  },

  value: {
    fontSize: "20@ms",
    fontWeight: "bold",
    color: colors.neutral.black,
  },

  unit: {
    fontSize: "12@ms",
    color: colors.neutral.s450,
    marginLeft: "4@ms",
  },

  indicator: {
    height: "4@ms",
    borderRadius: "4@ms",
    backgroundColor: colors.secondary.light,
    marginTop: "10@ms",
  },
});
