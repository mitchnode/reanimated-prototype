import { styles } from "@/theme/styles";
import { View } from "react-native";
import Animated, {
  SensorType,
  useAnimatedSensor,
  useAnimatedStyle,
  useReducedMotion,
  withSpring
} from "react-native-reanimated";

export default function Accel() {
  const rotation = useAnimatedSensor(SensorType.ROTATION);
  const reduceMotion = useReducedMotion();

  const multiplier = reduceMotion ? 2 : 20;

  const config = {
    stiffness: 100,
    damping: 10,
    mass: 4,
  };

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
