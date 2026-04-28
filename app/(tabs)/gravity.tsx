import { StyleSheet, View } from "react-native";
import Animated, {
  Easing,
  SensorType,
  useAnimatedSensor,
  useAnimatedStyle,
  withClamp,
  withSpring,
} from "react-native-reanimated";

export default function Accel() {
  const gravity = useAnimatedSensor(SensorType.GRAVITY);

  const config = {
    duration: 500,
    easing: Easing.bezier(0.5, 0.01, 0, 1),
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: withSpring(100 + gravity.sensor.value.z * 50),
      height: withSpring(100 + gravity.sensor.value.z * 50),
      transform: [
        {
          translateY: withClamp(
            { min: -350, max: 350 },
            withSpring(gravity.sensor.value.y * 50),
          ),
        },
        {
          translateX: withClamp(
            { min: -150, max: 150 },
            withSpring(gravity.sensor.value.x * 50),
          ),
        },
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
