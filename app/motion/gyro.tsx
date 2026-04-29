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
  const gyroscope = useAnimatedSensor(SensorType.GYROSCOPE);
  const reduceMotion = useReducedMotion();

  const multiplier = reduceMotion ? 10 : 50;

  const config = {
    duration: 500,
    easing: Easing.elastic(2),
  };

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
