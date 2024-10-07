import * as React from "react";
import { Image } from "expo-image"; // Ensure expo-image is installed
import { StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient"; // Make sure expo-linear-gradient is installed
import Login from "@components/ilp/Login"; // Ensure correct path for Login component
import { Border } from "../../GlobalStyles"; // Ensure that GlobalStyles contains the required 'Border'

const MobileLogin = () => {
  return (
    <LinearGradient
      style={styles.mobileLogin}
      locations={[0.5, 1]} // Adjust gradient stops for desired effect
      colors={["rgba(0, 246, 255, 0.2)", "rgba(0, 148, 153, 0.2)"]} // Customize colors for a good UI feel
    >
      <Image
        style={styles.transparentLogoIcon}
        contentFit="cover" // Expo-image-specific prop for image scaling
        source={require("@assets/transparent-logo1.png")} // Ensure the image path is correct
      />
      <Login /> 
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  transparentLogoIcon: {
    position: "absolute",
    top: 96, // Consider making this responsive for different screen sizes
    left: 80, // Same here, if needed
    borderRadius: Border.br_8xs, // Border radius from global styles
    width: 200, // Fixed width, can be made responsive
    height: 191, // Fixed height, adjust as necessary
  },
  mobileLogin: {
    flex: 1,
    width: "100%",
    height: 800, // Fixed height, can be made responsive for different screens
    overflow: "hidden",
    backgroundColor: "transparent", // Transparent background to show gradient
  },
});

export default MobileLogin;
