import { styles } from "@/theme/styles";
import {
  RecordingPresets,
  useAudioRecorder,
  useAudioRecorderState,
} from "expo-audio";
import { Button, Text, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useReducedMotion,
  withSpring,
} from "react-native-reanimated";

export default function Sound() {
  // Create the Recorder object and attach a Recorder State
  const recorder = useAudioRecorder(
    { ...RecordingPresets.HIGH_QUALITY, isMeteringEnabled: true },
    (status) => {
      console.log("Recording Status: ", status);
    },
  );
  const recorderState = useAudioRecorderState(recorder, 100);

  // Get the Reduce Motion system setting from the users device
  const reduceMotion = useReducedMotion();

  // Set up multiplier base on reduceMotion setting
  const multiplier = reduceMotion ? 0 : 30;

  // Function to start recording audio with Metering Enabled for 10 seconds
  // File is automatically saves locally, but not used.
  const startRecording = async () => {
    await recorder.prepareToRecordAsync({ isMeteringEnabled: true });
    recorder.record({ forDuration: 10 });
  };

  // Create an Animated Style to change the height of the red ball based on the audio level
  const animatedStyle = useAnimatedStyle(() => {
    if (recorderState.metering != undefined) {
      return {
        height: withSpring((recorderState.metering + 40) * multiplier),
      };
    }
    return {
      height: 100,
    };
  }, [recorderState]);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, animatedStyle]} />

      <Button title="Record" onPress={startRecording} />
      {recorder.isRecording ? (
        <>
          <Text>Recording</Text>
          <Text>Metering: {recorderState.metering}</Text>
        </>
      ) : (
        <></>
      )}
    </View>
  );
}
