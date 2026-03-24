import HomeHeader from "@/src/components/HomeHeader";
import ScreenWrapper from "@/src/components/ScreenSwapper";
import StatCard from "@/src/components/statCard";
import React from "react";
import { StyleSheet, View } from "react-native";
import StepProgress from "./stepProgress";

const HomeScreen = () => {
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <HomeHeader name="Dushant" />

        <StepProgress steps={7500} goal={10000} />

        {/* Stats Section */}
        <View style={styles.statContainer}>
          <StatCard
            title="Calories"
            value="530"
            unit="kcal"
            icon="flame" // ✅ correct Ionicons name
            color="#FF6B00"
          />

          <StatCard
            title="Distance"
            value="5.8"
            unit="km"
            icon="location"
            color="#4A90E2"
          />

          <StatCard
            title="Active Time"
            value="65"
            unit="min"
            icon="time"
            color="#4CAF50"
          />
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },

  statContainer: {
    flexDirection: "row", // ✅ horizontal layout
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginTop: 20,
  },
});
