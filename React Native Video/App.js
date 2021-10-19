import React from "react";
import { StyleSheet, View } from "react-native";
import Video from "react-native-video";

export default function App() {
  return (
    <Video
      source={{ uri: "Anna.mp4" }} // Can be a URL or a local file.
      ref={(ref) => {
        this.player = ref;
      }} // Store reference
      onBuffer={this.onBuffer} // Callback when remote video is buffering
      onError={this.videoError} // Callback when video cannot be loaded
      style={styles.backgroundVideo}
    >
      <View style={{ height: 100, width: 100, backgroundColor: "#fff" }} />
    </Video>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  backgroundVideo: {
    flex: 1,
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
