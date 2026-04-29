import { styles } from "@/theme/styles";
import { Button, View } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

export default function Press() {
  // Create a shared value to use for size
  const randomWidth = useSharedValue(10);

  // Create configuration for the withSpring animation
  const config = {
    duration: 500,
    easing: Easing.bezier(0.5, 0.01, 0, 1),
  };

  // Create an Animated Style to change the height and width of the red ball based on the randomWidth
  const style = useAnimatedStyle(() => {
    return {
      width: withSpring(randomWidth.value, config),
      height: withSpring(randomWidth.value, config),
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, style]} />
      <Button
        title="Random"
        onPress={() => {
          randomWidth.value = Math.random() * 350;
        }}
      />
    </View>
  );
}
