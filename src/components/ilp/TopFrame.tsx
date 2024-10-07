import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useRouter } from "expo-router";

const Frame = () => {
  const router = useRouter(); // Use Expo Router

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logoText}>
          <Text style={styles.ilearn}>ILearn.</Text>
          <Text style={styles.place}>Place</Text>
        </Text>
        <Pressable
          style={styles.profileIconContainer}
          onPress={() => router.push("/profile")} // Navigate using Expo Router
        >
          <Image
            style={styles.profileIcon}
            contentFit="cover"
            source={require("@assets/icon-profile.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Takes full height
    backgroundColor: "#fff",
  },
  header: {
    height: 70,
    backgroundColor: "#6495ED", // Cornflower blue
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 10, // Add some padding to the top for vertical alignment
    paddingBottom: 10, // Add some padding to the bottom for vertical alignment
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 16,
    elevation: 16,
    width: '100%', // Make sure the header takes full width
  },
  logoText: {
    flex: 1, // Allow the text to take available space
    fontSize: 24,
    color: "#FFF",
    textAlign: "center", // Center the text horizontally
  },
  ilearn: {
    fontWeight: "500",
    color: "#87CEEB", // Lighter blue
  },
  place: {
    fontWeight: "700",
    color: "#FF6347", // Tomato red
  },
  profileIconContainer: {
    position: "absolute", // Position it absolutely
    right: 20, // Position from the right side
    top: 20, // Position from the top
    width: 30,
    height: 30,
  },
  profileIcon: {
    width: "100%",
    height: "100%",
  },
});

export default Frame;
