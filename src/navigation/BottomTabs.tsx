import FavScreen from "@/src/screens/fav";
import HomeScreen from "@/src/screens/home";
import ProfileScreen from "@/src/screens/profiles";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import IndexScreen from "../screens/index";

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Index" component={IndexScreen} />
      <Tab.Screen name="Fav" component={FavScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
