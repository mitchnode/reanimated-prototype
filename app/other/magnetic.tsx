import { styles } from "@/theme/styles";
import { View } from "react-native";
import Animated, {
  SensorType,
  useAnimatedSensor,
  useAnimatedStyle,
  useReducedMotion,
  withSpring,
} from "react-native-reanimated";

export default function Magnetic() {
  // Create an Animated Sensor hook for the magnetic field sensor
  const magnetic_field = useAnimatedSensor(SensorType.MAGNETIC_FIELD);

  // Get the Reduce Motion system setting from the users device
  const reduceMotion = useReducedMotion();

  // Set up multiplier base on reduceMotion setting
  const multiplier = reduceMotion ? 0 : 3;

  // Create an Animated Style to change the height and width of the red ball based on the magnetic field
  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: withSpring(100 + magnetic_field.sensor.value.z * multiplier),
      height: withSpring(100 + magnetic_field.sensor.value.z * multiplier),
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, animatedStyle]} />
    </View>
  );
}
