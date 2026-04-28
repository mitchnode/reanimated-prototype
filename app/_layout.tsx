import { FontAwesome } from "@expo/vector-icons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <>
      <Tabs
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name="other"
          options={{
            title: "Other",
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="sensors" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="space"
          options={{
            title: "Motion",
            tabBarIcon: ({ color }) => (
              <FontAwesome name="arrows" size={24} color={color} />
            ),
          }}
        />
      </Tabs>
      <StatusBar style="inverted" />
    </>
  );
}
