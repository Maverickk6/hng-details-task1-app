import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { WebView } from "react-native-webview";

const Webview = () => {
  return (
    <View style={styles.container}>
      <WebView source={{ uri: "https://www.github.com/maverickk6" }} />
    </View>
  );
};

export default Webview;

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    flex: 1
  },
});
