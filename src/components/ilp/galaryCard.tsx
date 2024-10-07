import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";

// ImageGalleryCard Component
interface ImageGalleryCardProps {
  image: any;
  content: string;
}

const ImageGalleryCard: React.FC<ImageGalleryCardProps> = ({ image, content }) => (
  <View style={styles.cardContainer}>
    <Image source={image} style={styles.cardImage} />
    <Text style={styles.cardText}>{content}</Text>
  </View>
);

const styles = StyleSheet.create({
  cardContainer: {
    width: Dimensions.get('window').width * 0.45, // Fixed width for each card
    backgroundColor: "#FFF",
    padding: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#FFC107',
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4, // for Android shadow
    marginHorizontal: 5, // Adding horizontal space between cards in horizontal scroll view
  },
  cardImage: {
    width: "100%", // Ensures the image takes the full width of the card
    height: Dimensions.get('window').width * 0.45 * 0.75, // Height based on card width with a 4:3 ratio (adjust ratio as needed)
    resizeMode: "cover", // Maintain aspect ratio of the image
    borderRadius: 8,
    marginBottom: 10,
  },
  cardText: {
    fontSize: 14,
    color: "#333", // Darker text for better readability
    lineHeight: 20, // Adds space between lines of text
  },
});

export default ImageGalleryCard;
