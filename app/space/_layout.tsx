import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="gyro"
        options={{
          title: "Gyro",
        }}
      />
      <Tabs.Screen
        name="accel"
        options={{
          title: "Accelerometer",
        }}
      />
      <Tabs.Screen
        name="gravity"
        options={{
          title: "Gravity",
        }}
      />
      <Tabs.Screen
        name="rotation"
        options={{
          title: "Rotation",
        }}
      />
    </Tabs>
  );
}
