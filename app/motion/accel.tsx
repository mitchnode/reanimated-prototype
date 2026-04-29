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
  const acceleromter = useAnimatedSensor(SensorType.ACCELEROMETER);
  const reduceMotion = useReducedMotion();

  const multiplier = reduceMotion ? 10 : 50;

  const config = {
    stiffness: 100,
    damping: 10,
    mass: 4,
  };

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
