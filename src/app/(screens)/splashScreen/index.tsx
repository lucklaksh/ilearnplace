import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Dimensions } from "react-native";
import { Border } from "../../../../GlobalStyles";

const SplashScreen1 = () => {
  return (
    <View style={styles.splashScreenContainer}>
      <Image
        style={styles.logo}
        contentFit="cover"
        source={require("@assets/transparent-logo.png")}
      />
    </View>
  );
};

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  logo: {
    width: width * 0.5, // 50% of the screen width for logo size
    height: width * 0.5, // Maintain square aspect ratio
    borderRadius: Border.br_8xs,
  },
  splashScreenContainer: {
    flex: 1, // Make the container fill the entire screen
    backgroundColor: "#00f6ff", // Background color
    justifyContent: "center", // Center logo vertically
    alignItems: "center", // Center logo horizontally
  },
});

export default SplashScreen1;
