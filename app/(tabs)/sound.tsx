import {
    RecordingPresets,
    useAudioRecorder,
    useAudioRecorderState,
} from "expo-audio";
import { Button, StyleSheet, Text, View } from "react-native";
import Animated, {
    useAnimatedStyle,
    withSpring,
} from "react-native-reanimated";

export default function Sound() {
  const recorder = useAudioRecorder(
    { ...RecordingPresets.HIGH_QUALITY, isMeteringEnabled: true },
    (status) => {
      console.log("Recording Status: ", status);
    },
  );
  const recorderState = useAudioRecorderState(recorder, 100);

  const startRecording = async () => {
    await recorder.prepareToRecordAsync({ isMeteringEnabled: true });
    recorder.record({ forDuration: 10 });
  };

  const animatedStyle = useAnimatedStyle(() => {
    if (recorderState.metering != undefined) {
      return {
        height: withSpring(10 - recorderState.metering * 3),
      };
    }
    return {
      height: 100,
    };
  }, [recorderState]);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, animatedStyle]} />

      <Button title="toggle" onPress={startRecording} />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: "black",
    margin: 30,
  },
});
