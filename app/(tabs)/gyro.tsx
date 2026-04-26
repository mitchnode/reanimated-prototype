import { StyleSheet, View } from "react-native";
import Animated, {
    Easing,
    SensorType,
    useAnimatedSensor,
    useAnimatedStyle,
    withSpring,
} from "react-native-reanimated";

export default function Gyro() {
  const gyroscope = useAnimatedSensor(SensorType.GYROSCOPE);

  const config = {
    duration: 500,
    easing: Easing.bezier(0.5, 0.01, 0, 1),
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateY: withSpring(gyroscope.sensor.value.x * 50) },
        { translateX: withSpring(gyroscope.sensor.value.y * 50) },
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
