import { styles } from "@/theme/styles";
import { View } from "react-native";
import Animated, {
  SensorType,
  useAnimatedSensor,
  useAnimatedStyle,
  useReducedMotion,
  withSpring,
} from "react-native-reanimated";

export default function Accel() {
  // Create an Animated Sensor hook for the accelerometer
  const acceleromter = useAnimatedSensor(SensorType.ACCELEROMETER);

  // Get the Reduce Motion system setting from the users device
  const reduceMotion = useReducedMotion();

  // Set up multiplier base on reduceMotion setting
  const multiplier = reduceMotion ? 10 : 50;

  // Create configuration for the withSpring animation
  const config = {
    stiffness: 100,
    damping: 10,
    mass: 4,
  };

  // Create an Animated Style to change the height, width, x position and y position of the red ball based on the accelerometer without gravity
  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: withSpring(100 + acceleromter.sensor.value.z * multiplier, config),
      height: withSpring(
        100 + acceleromter.sensor.value.z * multiplier,
        config,
      ),
      transform: [
        {
          translateY: withSpring(
            acceleromter.sensor.value.y * multiplier,
            config,
          ),
        },
        {
          translateX: withSpring(
            acceleromter.sensor.value.x * multiplier,
            config,
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
