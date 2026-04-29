import { styles } from "@/theme/styles";
import { View } from "react-native";
import Animated, {
  SensorType,
  useAnimatedSensor,
  useAnimatedStyle,
  useReducedMotion,
  withClamp,
  withSpring
} from "react-native-reanimated";

export default function Accel() {
  // Create an Animated Sensor hook for gravity
  const gravity = useAnimatedSensor(SensorType.GRAVITY);

  // Get the Reduce Motion system setting from the users device
  const reduceMotion = useReducedMotion();

  // Set up multiplier base on reduceMotion setting
  const multiplier = reduceMotion ? 10 : 50;

  // Create an Animated Style to change the height, width, x position and y position of the red ball based on the accelerometer sensor with gravity
  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: withSpring(600 + gravity.sensor.value.z * multiplier),
      height: withSpring(600 + gravity.sensor.value.z * multiplier),
      transform: [
        {
          translateY: withClamp(
            { min: -350, max: 350 },
            withSpring(0 - gravity.sensor.value.y * multiplier),
          ),
        },
        {
          translateX: withClamp(
            { min: -150, max: 150 },
            withSpring(gravity.sensor.value.x * multiplier),
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
