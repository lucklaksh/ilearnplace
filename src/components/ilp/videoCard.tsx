import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Video } from 'expo-av';

// VideoCard Component
interface VideoCardProps {
  videoUri: string;
  title: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ videoUri, title }) => (
  <View style={styles.cardContainer}>
    <Video
      source={{ uri: videoUri }}
      style={styles.video}
      resizeMode="cover"
      useNativeControls={true} // Show media controls (play, pause, etc.)
      isLooping
    />
    <Text style={styles.cardText}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  galleryContainer: {
    marginVertical: 20, // Adjust as needed for spacing
  },
  cardContainer: {
    width: Dimensions.get('window').width * 0.7, // Set card width based on screen size
    marginRight: 15, // Space between cards
    marginBottom: 20, // Space below each card for separation
    backgroundColor: '#FFF',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    padding: 10,
    paddingBottom: 20, // Added padding at the bottom for better layout
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4, // for Android shadow
  },
  video: {
    width: '100%',
    height: Dimensions.get('window').width * 0.45, // Adjust height based on width
    borderRadius: 8,
    backgroundColor: 'black',
  },
  cardText: {
    fontSize: 16,
    color: '#333',
    marginTop: 10,
  },
});

export default VideoCard;
