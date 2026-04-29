import { styles } from "@/theme/styles";
import { View } from "react-native";
import Animated, {
  Easing,
  SensorType,
  useAnimatedSensor,
  useAnimatedStyle,
  useReducedMotion,
  withTiming,
} from "react-native-reanimated";

export default function Gyro() {
  // Create an Animated Sensor hook for the gyroscope
  const gyroscope = useAnimatedSensor(SensorType.GYROSCOPE);

  // Get the Reduce Motion system setting from the users device
  const reduceMotion = useReducedMotion();

  // Set up multiplier base on reduceMotion setting
  const multiplier = reduceMotion ? 10 : 50;

  // Create configuration for the withTiming animation
  const config = {
    duration: 500,
    easing: Easing.elastic(2),
  };

  // Create an Animated Style to change the x position and y position of the red ball based on the gryroscope
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: withTiming(gyroscope.sensor.value.x * multiplier, config),
        },
        {
          translateX: withTiming(gyroscope.sensor.value.y * multiplier, config),
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
