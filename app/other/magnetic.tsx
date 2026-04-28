import { StyleSheet, View } from "react-native";
import Animated, {
    Easing,
    SensorType,
    useAnimatedSensor,
    useAnimatedStyle,
    withSpring,
} from "react-native-reanimated";

export default function Magnetic() {
  const magnetic_field = useAnimatedSensor(SensorType.MAGNETIC_FIELD);

  const config = {
    duration: 500,
    easing: Easing.bezier(0.5, 0.01, 0, 1),
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: withSpring(100 + magnetic_field.sensor.value.z * 3),
      height: withSpring(100 + magnetic_field.sensor.value.z * 3),
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
