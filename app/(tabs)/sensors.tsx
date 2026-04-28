import {
  Accelerometer,
  DeviceMotion,
  Gyroscope,
  Magnetometer,
} from "expo-sensors";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated from "react-native-reanimated";

export default function Sensors() {
  const [gyro, setGyroData] = useState({ x: 0, y: 0, z: 0 });
  const [acc, setAccData] = useState({ x: 0, y: 0, z: 0 });
  const [grav, setGravData] = useState({ x: 0, y: 0, z: 0 });
  const [mag, setMagData] = useState({ x: 0, y: 0, z: 0 });

  useEffect(() => {
    Gyroscope.setUpdateInterval(100);
    Gyroscope.addListener((gyroscopeData) => {
      setGyroData(gyroscopeData);
    });
    Accelerometer.setUpdateInterval(100);
    Accelerometer.addListener((accelerometerData) => {
      setAccData(accelerometerData);
    });
    DeviceMotion.addListener((gravityData) => {
      setGravData(gravityData.accelerationIncludingGravity);
    });
    Magnetometer.addListener((magneticData) => {
      setMagData(magneticData);
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
      <Text>Accelerometer with Gravity</Text>
      <Animated.Text>X: {grav.x.toFixed(2)}</Animated.Text>
      <Animated.Text>Y: {grav.y.toFixed(2)}</Animated.Text>
      <Animated.Text>Z: {grav.z.toFixed(2)}</Animated.Text>
      <Text>Magnetometer</Text>
      <Animated.Text>X: {mag.x.toFixed(2)}</Animated.Text>
      <Animated.Text>Y: {mag.y.toFixed(2)}</Animated.Text>
      <Animated.Text>Z: {mag.z.toFixed(2)}</Animated.Text>
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
