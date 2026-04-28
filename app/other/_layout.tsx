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
        name="magnetic"
        options={{
          title: "Magnetometer",
        }}
      />
      <Tabs.Screen
        name="sound"
        options={{
          title: "Sound",
        }}
      />
      <Tabs.Screen
        name="sensors"
        options={{
          title: "Sensors Data",
        }}
      />
    </Tabs>
  );
}
