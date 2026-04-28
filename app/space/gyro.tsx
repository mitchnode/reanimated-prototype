import { StyleSheet, View } from "react-native";
import Animated, {
  Easing,
  SensorType,
  useAnimatedSensor,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

export default function Gyro() {
  const gyroscope = useAnimatedSensor(SensorType.GYROSCOPE);

  const config = {
    duration: 500,
    easing: Easing.elastic(2),
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateY: withTiming(gyroscope.sensor.value.x * 50, config) },
        { translateX: withTiming(gyroscope.sensor.value.y * 50, config) },
      ],
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, animatedStyle]} />
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
