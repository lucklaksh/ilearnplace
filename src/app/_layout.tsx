import React, { useEffect, useState } from "react";
import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import SplashScreen1 from "@/app/(screens)/splashScreen"; // Ensure the correct path to splash screen component

const Layout = () => {
  const [hideSplashScreen, setHideSplashScreen] = useState(false); // State to control splash screen visibility
  const [fontsLoaded] = useFonts({
    // Load custom fonts
    "Outfit-Regular": require("@assets/fonts/Outfit-Regular.ttf"),
    "Outfit-Medium": require("@assets/fonts/Outfit-Medium.ttf"),
    "Outfit-Bold": require("@assets/fonts/Outfit-Bold.ttf"),
    "Inter-SemiBold": require("@assets/fonts/Inter-SemiBold.ttf"),
    "Mulish-Regular": require("@assets/fonts/Mulish-Regular.ttf"),
    "Mulish-SemiBold": require("@assets/fonts/Mulish-SemiBold.ttf"),
    "Mulish-Bold": require("@assets/fonts/Mulish-Bold.ttf"),
    "PlusJakartaSans-Medium": require("@assets/fonts/PlusJakartaSans-Medium.ttf"),
    "PlusJakartaSans-SemiBold": require("@assets/fonts/PlusJakartaSans-SemiBold.ttf"),
    "PlusJakartaSans-Bold": require("@assets/fonts/PlusJakartaSans-Bold.ttf"),
    "Jost-SemiBold": require("@assets/fonts/Jost-SemiBold.ttf"),
    "Roboto-Regular": require("@assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("@assets/fonts/Roboto-Medium.ttf"),
    "Rubik-Regular": require("@assets/fonts/Rubik-Regular.ttf"),
    "Rubik-Medium": require("@assets/fonts/Rubik-Medium.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      // Hide splash screen after fonts are loaded and 1 second passes
      const timeout = setTimeout(() => {
        setHideSplashScreen(true);
      }, 1000);

      return () => clearTimeout(timeout); // Cleanup the timeout on unmount
    }
  }, [fontsLoaded]); // Only re-run effect if fontsLoaded changes

  // If fonts aren't loaded yet, show splash screen
  if (!hideSplashScreen) {
    return <SplashScreen1 />; // Render the splash screen until fonts are ready
  }

  return (
    <Stack screenOptions={{ headerTitleAlign: "center" }}> 
      {/* Center title on header */}
      <Stack.Screen name="index" options={{ title: "ilearnPlace" }} />
    </Stack>
  );
};

export default Layout;