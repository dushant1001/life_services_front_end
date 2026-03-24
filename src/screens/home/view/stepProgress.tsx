import { colors } from "@/src/constants/colors";
import React from "react";
import { Text, View } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { ScaledSheet } from "react-native-size-matters";

type Props = {
  steps?: number;
  goal?: number;
};

export default function StepProgress({ steps = 7500, goal = 10000 }: Props) {
  const percentage = (steps / goal) * 100;

  return (
    <View style={styles.container}>
      <AnimatedCircularProgress
        size={230}
        width={18}
        fill={percentage}
        rotation={220}
        arcSweepAngle={260}
        tintColor={colors.primary.brand}
        tintColorSecondary={colors.primary.brand}
        backgroundColor={colors.surface.background}
        lineCap="round"
      >
        {() => (
          <View style={styles.inner}>
            <Text style={styles.percent}>{Math.round(percentage)}%</Text>

            <Text style={styles.steps}>{steps.toLocaleString()}</Text>

            <Text style={styles.label}>STEPS</Text>

            <Text style={styles.goal}>Goal: {goal.toLocaleString()} steps</Text>
          </View>
        )}
      </AnimatedCircularProgress>
    </View>
  );
}

const styles = ScaledSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: "20@ms",
  },

  inner: {
    alignItems: "center",
  },

  percent: {
    fontSize: "16@ms",
    color: colors.text.link,
    marginBottom: "4@ms",
  },

  steps: {
    fontSize: "34@ms",
    fontWeight: "bold",
    color: "#000",
  },

  label: {
    fontSize: "12@ms",
    color: "#777",
    letterSpacing: 1,
  },

  goal: {
    fontSize: "12@ms",
    color: "#999",
    marginTop: "4@ms",
  },
});
