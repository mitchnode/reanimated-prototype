import { styles } from "@/theme/styles";
import { View } from "react-native";
import Animated, {
  SensorType,
  useAnimatedSensor,
  useAnimatedStyle,
  useReducedMotion,
  withSpring
} from "react-native-reanimated";

export default function Magnetic() {
  const magnetic_field = useAnimatedSensor(SensorType.MAGNETIC_FIELD);
  const reduceMotion = useReducedMotion();

  const multiplier = reduceMotion ? 0 : 3;

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
