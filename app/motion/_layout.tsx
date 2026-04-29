import { FontAwesome6 } from "@expo/vector-icons";
import Foundation from "@expo/vector-icons/Foundation";
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
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="group-arrows-rotate" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="accel"
        options={{
          title: "Accelerometer",
          tabBarIcon: ({ color }) => (
            <Foundation name="arrows-out" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="gravity"
        options={{
          title: "Gravity",
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="arrow-down-long" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="rotation"
        options={{
          title: "Rotation",
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="arrows-rotate" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
