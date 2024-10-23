import * as React from "react";
import { useEffect, useState } from "react";
import { Image } from "expo-image"; // Ensure expo-image is installed
import { StyleSheet, View, Dimensions, ActivityIndicator } from "react-native";
import { LinearGradient } from "expo-linear-gradient"; // Make sure expo-linear-gradient is installed
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router"; // Import useRouter for navigation
import { Border } from "../../GlobalStyles"; // Ensure that GlobalStyles contains the required 'Border'

const { width, height } = Dimensions.get("window"); // Get screen dimensions for responsiveness

const useTokenVerification = () => {
  const [isValid, setIsValid] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkToken = async () => {
      try {
        const token = await AsyncStorage.getItem("authToken"); // Get token from storage
        const contact = await AsyncStorage.getItem("phoneNumber"); // Get contact from storage

        console.log("Token:", token);
        console.log("Contact:", contact);

        if (token && contact) {
          const response = await fetch("http://65.0.178.227:8000/ilpapi/token/validate", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              jwt_token: token,  // Send token
              contact: contact,  // Send contact info
            }),
          });

          if (response.ok) {
            const data = await response.json();
            if (data.sucess) {
              setIsValid(true);
              router.push("/homeScreen"); // Navigate to home screen if token is valid
            } else {
              console.warn("Token is invalid, navigating to MobileLogin.");
              router.push("/mobileLogin"); // Navigate to login on invalid token
            }
          } else {
            console.warn("Token validation failed, navigating to MobileLogin.");
            router.push("/mobileLogin"); // Navigate to login on error
          }
        } else {
          console.warn("No token or contact found, navigating to MobileLogin.");
          router.push("/mobileLogin"); // Navigate to login if no token or contact
        }
      } catch (error) {
        console.error("Token verification failed:", error);
        router.push("/mobileLogin"); // Navigate to login on error
      } finally {
        setLoading(false); // Set loading to false after checking the token
      }
    };

    checkToken(); // Check the token on component mount
  }, [router]);

  return { loading, isValid };
};

const FirstScreen = () => {
  const { loading } = useTokenVerification(); // Use custom hook for token verification

  return (
    <LinearGradient
      style={styles.mobileLogin}
      locations={[0.5, 1]} // Adjust gradient stops for desired effect
      colors={["rgba(0, 246, 255, 0.2)", "rgba(0, 148, 153, 0.2)"]} // Customize colors for a good UI feel
    >
      <View style={styles.loadingContainer}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.transparentLogoIcon}
            contentFit="cover"
            source={require("@assets/transparent-logo1.png")} // Ensure the image path is correct
          />
        </View>
        {loading ? ( // Show activity indicator only during loading
          <ActivityIndicator size="large" color="#fff" />
        ) : (
          <View style={styles.successContainer}>
            {/* Optionally display some content when loading is done */}
          </View>
        )}
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  mobileLogin: {
    flex: 1,
    width: "100%",
    height: height, // Dynamically set height based on screen size
    overflow: "hidden",
    backgroundColor: "transparent",
    justifyContent: "center", // Center content vertically
  },
  logoContainer: {
    alignItems: "center", // Center the logo horizontally
    marginBottom: 40, // Space between logo and login form
  },
  transparentLogoIcon: {
    width: width * 0.5, // Make logo responsive, 50% of screen width
    height: (width * 0.5) * 0.95, // Maintain aspect ratio (width * height ratio)
    borderRadius: Border.br_8xs,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Optional: overlay during loading
  },
  successContainer: {
    // Add styles for when loading is done (optional)
  },
});

export default FirstScreen;
