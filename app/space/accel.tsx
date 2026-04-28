import { styles } from "@/theme/styles";
import { View } from "react-native";
import Animated, {
  SensorType,
  useAnimatedSensor,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";

export default function Accel() {
  const acceleromter = useAnimatedSensor(SensorType.ACCELEROMETER);

  const config = {
    stiffness: 100,
    damping: 10,
    mass: 4,
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: withSpring(100 + acceleromter.sensor.value.z * 50, config),
      height: withSpring(100 + acceleromter.sensor.value.z * 50, config),
      transform: [
        { translateY: withSpring(acceleromter.sensor.value.y * 50, config) },
        { translateX: withSpring(acceleromter.sensor.value.x * 50, config) },
      ],
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, animatedStyle]} />
    </View>
  );
}
