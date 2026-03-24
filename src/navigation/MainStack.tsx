import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { colors } from "../constants/colors";
import BottomTabs from "./BottomTabs";

const Stack = createNativeStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: colors.surface.background },
      }}
    >
      <Stack.Screen name="MainTabs" component={BottomTabs} />
    </Stack.Navigator>
  );
}
