import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

// ImageGalleryCard Component
const DileveryCard: React.FC = () => {
  const router = useRouter();

  return (
    <TouchableOpacity style={styles.storyCard} onPress={() => router.push("/addAddress")}>
      <View style={styles.contentWrapper}>
        <Image
          source={require('@assets/icon-add-location.png')}
          style={styles.iconLeft}
        />
        <Text style={styles.storyText}>
          Add Delivery location and coupons to check extra discount
        </Text>
        <Image
          source={require('@assets/icon-right-arrows.png')}
          style={styles.iconRight}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  storyCard: {
    flex: 1, // Make the card flexible to fill available space
    width: "100%",
    backgroundColor: "#007bff", // Blue background color
    padding: 15,
    borderRadius: 10,
    borderColor: "#DDD",
    borderWidth: 1,
    marginBottom: 10,
    flexDirection: "row", // Align icons and text in a row
    alignItems: "center", // Vertically align the items
    justifyContent: "space-between", // Space out icons and text
  },
  contentWrapper: {
    flexDirection: "row", // Align icons and text in a row
    alignItems: "center", // Vertically align the items
  },
  iconLeft: {
    width: 30,
    height: 30,
    resizeMode: "contain",
    marginRight: 10, // Adds space between the left icon and text
  },
  storyText: {
    flex: 1, // Takes available space between icons
    fontSize: 14,
    color: "#FFF", // White text color for contrast against blue background
  },
  iconRight: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    marginLeft: 10, // Adds space between text and right icon
  },
});

export default DileveryCard;
