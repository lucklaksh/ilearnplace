import React, { useState } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

const SplashScreen = () => {
  const [splashScreenActivityIndicatorAnimating] = useState(true);

  return (
    <View style={styles.container}>
      <ActivityIndicator
        style={styles.splashScreen}
        animating={splashScreenActivityIndicatorAnimating}
        size="large" // Change size to "small" or "large"
        color="#00f6ff" // Customize the color as needed
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff", // Add a background color if desired
  },
  splashScreen: {
    width: 360,
    height: 800,
    overflow: "hidden",
  },
});

export default SplashScreen;
