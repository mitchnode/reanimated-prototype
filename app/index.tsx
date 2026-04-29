import { styles } from "@/theme/styles";
import { FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.title}>useAnimatedSensor</Text>
        <Text style={styles.subtitle}>Proof of concept</Text>
        <Text style={styles.text}>by Mitchell Collings</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.subtitle}>Libraries used</Text>
        <View style={styles.row}>
          <Text style={styles.text}>react-native-reanimated</Text>
          <Text style={styles.version}>4.1.1</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>react-native-worklets</Text>
          <Text style={styles.version}>0.5.1</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>expo-audio</Text>
          <Text style={styles.version}>1.1.1</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>expo-sensors</Text>
          <Text style={styles.version}>15.0.8</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>expo-status-bar</Text>
          <Text style={styles.version}>3.0.9</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>expo</Text>
          <Text style={styles.version}>54.0.33</Text>
        </View>
      </View>
      <View style={styles.container}>
        <Text style={styles.subtitle}>Version</Text>
        <Text style={styles.text}>0.0.1</Text>
        <Pressable
          style={styles.button}
          onPress={() =>
            router.push("https://github.com/mitchnode/reanimated-prototype")
          }
        >
          <FontAwesome name="github" size={42} color={"black"} />
          <Text>View on Github</Text>
        </Pressable>
      </View>
    </View>
  );
}
