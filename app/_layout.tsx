import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
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
  );
}
