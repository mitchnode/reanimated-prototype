import { styles } from "@/theme/styles";
import { View } from "react-native";
import Animated, {
  Easing,
  SensorType,
  useAnimatedSensor,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

export default function Gyro() {
  const gyroscope = useAnimatedSensor(SensorType.GYROSCOPE);

  const config = {
    duration: 500,
    easing: Easing.elastic(2),
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateY: withTiming(gyroscope.sensor.value.x * 50, config) },
        { translateX: withTiming(gyroscope.sensor.value.y * 50, config) },
      ],
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, animatedStyle]} />
    </View>
  );
}
