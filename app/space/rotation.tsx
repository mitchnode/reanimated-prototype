import { StyleSheet, Text, View } from "react-native";
import Animated, {
    SensorType,
    useAnimatedSensor,
    useAnimatedStyle,
    useDerivedValue,
    withSpring,
} from "react-native-reanimated";

export default function Accel() {
  const rotation = useAnimatedSensor(SensorType.ROTATION);

  const config = {
    stiffness: 100,
    damping: 10,
    mass: 4,
  };

  const rotValue = useDerivedValue(() => {
    return rotation.sensor.value;
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: withSpring(100 + rotation.sensor.value.yaw * 20, config),
      height: withSpring(100 + rotation.sensor.value.yaw * 20, config),
      transform: [
        { translateY: withSpring(rotation.sensor.value.pitch * 200, config) },
        { translateX: withSpring(rotation.sensor.value.roll * 50, config) },
      ],
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, animatedStyle]} />
      <Text>Magnetometer</Text>
      <Animated.Text>Yaw: {rotValue.value.yaw}</Animated.Text>
      <Animated.Text>Pitch: {rotValue.value.pitch}</Animated.Text>
      <Animated.Text>Roll: {rotValue.value.roll}</Animated.Text>
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
