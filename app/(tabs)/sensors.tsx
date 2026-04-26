import { Accelerometer, Gyroscope } from "expo-sensors";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated from "react-native-reanimated";

export default function Sensors() {
  const [gyro, setGyroData] = useState({ x: 0, y: 0, z: 0 });
  const [acc, setAccData] = useState({ x: 0, y: 0, z: 0 });

  useEffect(() => {
    Gyroscope.setUpdateInterval(100);
    Gyroscope.addListener((gyroscopeData) => {
      setGyroData(gyroscopeData);
    });
    Accelerometer.setUpdateInterval(100);
    Accelerometer.addListener((accelerometerData) => {
      setAccData(accelerometerData);
    });
  });

  return (
    <View style={styles.container}>
      <Text>Gyroscope</Text>
      <Animated.Text>X: {gyro.x.toFixed(2)}</Animated.Text>
      <Animated.Text>Y: {gyro.y.toFixed(2)}</Animated.Text>
      <Animated.Text>Z: {gyro.z.toFixed(2)}</Animated.Text>
      <Text>Accelerometer</Text>
      <Animated.Text>X: {acc.x.toFixed(2)}</Animated.Text>
      <Animated.Text>Y: {acc.y.toFixed(2)}</Animated.Text>
      <Animated.Text>Z: {acc.z.toFixed(2)}</Animated.Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: "black",
    margin: 30,
  },
});
