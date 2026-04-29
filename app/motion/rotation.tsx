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
  // Create an Animated Sensor hook for the rotation of the device
  const rotation = useAnimatedSensor(SensorType.ROTATION);

  // Get the Reduce Motion system setting from the users device
  const reduceMotion = useReducedMotion();

  // Set up multiplier base on reduceMotion setting
  const multiplier = reduceMotion ? 2 : 20;

  // Create configuration for the withSpring animation
  const config = {
    stiffness: 100,
    damping: 10,
    mass: 4,
  };

  // Create an Animated Style to change the height, width, x position and y position of the red ball based on the rotation of the device
  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: withSpring(100 + rotation.sensor.value.yaw * multiplier, config),
      height: withSpring(100 + rotation.sensor.value.yaw * multiplier, config),
      transform: [
        {
          translateY: withSpring(
            rotation.sensor.value.pitch * multiplier * 10,
            config,
          ),
        },
        {
          translateX: withSpring(
            rotation.sensor.value.roll * multiplier * 2.5,
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
