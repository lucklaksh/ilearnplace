import React from "react";
import { SafeAreaView, ScrollView, Text, StyleSheet, View } from "react-native";
import VideoCard from "@/components/ilp/videoCard";
import { LinearGradient } from "expo-linear-gradient";

const App = () => {
  return (
    <LinearGradient
      style={styles.container}
      locations={[0.5, 1]}
      colors={["rgba(0, 246, 255, 0.2)", "rgba(0, 148, 153, 0.2)"]}
    >
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
        <Text style={styles.sectionTitle}>Featured Videos</Text>

        <View style={styles.videoList}>
          <VideoCard videoUri="https://www.w3schools.com/html/mov_bbb.mp4" title="Task Description-01" />
          <VideoCard videoUri="https://www.w3schools.com/html/movie.mp4" title="Unboxing" />
          <VideoCard videoUri="https://www.w3schools.com/html/mov_bbb.mp4" title="STEM Concept-01" />
          <VideoCard videoUri="https://www.w3schools.com/html/mov_bbb.mp4" title="STEM Concept-02" />
          <VideoCard videoUri="https://www.w3schools.com/html/mov_bbb.mp4" title="STEM Concept-03" />
          <VideoCard videoUri="https://www.w3schools.com/html/mov_bbb.mp4" title="STEM Concept-04" />
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F4F4",
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  sectionTitle: {
    color: "#333333",
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 20,
    textAlign: "center",
  },
  videoList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center', // Centering the video items
  },
  videoItem: {
    width: "48%", // Adjusted to fill space while allowing for margins
    margin: 8, // Added margin to create space between video cards
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    overflow: "hidden",
    alignItems: "center",
    padding: 10,
    elevation: 4, // For Android shadow effect
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4, // For iOS shadow effect
  },
  videoBackground: {
    width: '100%',
    height: 130, // Increased thumbnail size
    marginBottom: 8,
    borderRadius: 8, // Smooth edges for the video thumbnail
  },
  videoDurationContainer: {
    position: "absolute",
    bottom: 10,
    right: 10,
    backgroundColor: "#000000B0",
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  videoDuration: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "500",
  },
  videoTitle: {
    color: "#333333",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    marginTop: 4,
  },
});

export default App;
