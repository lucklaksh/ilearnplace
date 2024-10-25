import React from "react";
import { SafeAreaView, ScrollView, Text, StyleSheet, View, ActivityIndicator } from "react-native";
import VideoCard from "@/components/ilp/videoCard";
import { LinearGradient } from "expo-linear-gradient";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { useState, useEffect } from "react";

const App = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedTask, setSelectedTask] = useState(null);

  const fetchTask = async () => {
    try {
      setLoading(true);
      const selectedTaskData = await AsyncStorage.getItem('selectedTask');
      if (!selectedTaskData) {
        throw new Error('Missing game data or selected task');
      }
      const parsedSelectedTask = JSON.parse(selectedTaskData);
      setSelectedTask(parsedSelectedTask);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTask();
  }, []);

  const handleCardPress = () => {
    console.log('Card pressed');
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#00BFFF" />;
  }

  if (error) {
    return <Text style={{ color: 'red' }}>{error}</Text>;
  }

  return (
    <LinearGradient
      style={styles.container}
      locations={[0.5, 1]}
      colors={["rgba(0, 246, 255, 0.2)", "rgba(0, 148, 153, 0.2)"]}
    >
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
        <Text style={styles.sectionTitle}>Featured Videos</Text>

        <View style={styles.videoList}>
          {selectedTask.task_media
            ?.filter((media) => media.media_type === 'video') // Filter videos only
            .map((media, index) => (
              <VideoCard
                key={index}
                videoUri={media.media_path} // Assuming media_url contains the video path
                title={media.media_title} // Assuming media_name contains the title
              />
            ))
          }
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
});

export default App;
