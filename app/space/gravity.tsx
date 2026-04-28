import { styles } from "@/theme/styles";
import { View } from "react-native";
import Animated, {
  Easing,
  SensorType,
  useAnimatedSensor,
  useAnimatedStyle,
  useReducedMotion,
  withClamp,
  withSpring,
} from "react-native-reanimated";

export default function Accel() {
  const gravity = useAnimatedSensor(SensorType.GRAVITY);
  const reduceMotion = useReducedMotion();

  const multiplier = reduceMotion ? 10 : 50;

  const config = {
    duration: 500,
    easing: Easing.bezier(0.5, 0.01, 0, 1),
  };

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
