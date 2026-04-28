import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function TabLayout() {
  return (
    <>
      <Tabs
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name="space"
          options={{
            title: "Space",
          }}
        />
        <Tabs.Screen
          name="other"
          options={{
            title: "Other",
          }}
        />
      </Tabs>
      <StatusBar style="dark" />
    </>
  );
}
