import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Button",
        }}
      />
      <Tabs.Screen
        name="gyro"
        options={{
          title: "Gyro",
        }}
      />
    </Tabs>
  );
}
