import { Text, View } from "react-native";
import { ScaledSheet } from "react-native-size-matters";

export default function SettingScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Setting Screen</Text>
    </View>
  );
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: "24@ms",
  },
});
