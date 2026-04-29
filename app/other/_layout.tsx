import { FontAwesome6 } from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="press"
        options={{
          title: "Button",
          tabBarIcon: ({ color }) => (
            <Ionicons name="radio-button-on" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="magnetic"
        options={{
          title: "Magnetometer",
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="compass" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="sound"
        options={{
          title: "Sound",
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="volume-high" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="sensors"
        options={{
          title: "Sensors Data",
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="database" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
