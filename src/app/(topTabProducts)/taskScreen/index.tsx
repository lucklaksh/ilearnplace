import React, { useEffect, useState } from 'react';
import { useRouter } from 'expo-router';
import { View, Text, ScrollView, StyleSheet, ActivityIndicator, Alert, TouchableOpacity, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ScaleAndOpacity } from 'react-native-motion';

export default function TaskScreen() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [tasks, setTasks] = useState([]);

  const fetchTask = async () => {
    try {
      setLoading(true);
      const selectedLevelData = await AsyncStorage.getItem('selectedlevel');
      if (!selectedLevelData) {
        throw new Error('Missing game data or selected level');
      }
      const parsedSelectedLevel = JSON.parse(selectedLevelData);
      setTasks(parsedSelectedLevel.tasks || []); // Default to an empty array if tasks is undefined
    } catch (err) {
      setError(err.message);
      setTasks([]); // Reset tasks if there's an error
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTask();
  }, []);

  const handleCardPress = async (task) => {
    try {
      await AsyncStorage.setItem('selectedTask', JSON.stringify(task));
      console.log('Task saved to AsyncStorage:', task.task_name);
      router.push('/taskDashboard'); // Navigate to task dashboard after saving the task
    } catch (error) {
      console.error('Failed to handle task press:', error);
      Alert.alert('Error', 'Unable to select this task. Please try again.');
    }
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#00BFFF" />;
  }

  if (error) {
    console.error('Error fetching tasks:', error);
    return <Text style={styles.errorText}>{error}</Text>;
  }

  return (
    <View style={styles.container}>
      {/* Task cards */}
      <ScrollView contentContainerStyle={styles.scrollView}>
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <ScaleAndOpacity key={task.id} isHidden={false} animateOnDidMount>
              <TouchableOpacity onPress={() => handleCardPress(task)} style={styles.touchable}>
                <ImageBackground
                  source={{ uri: "https://www.pngall.com/wp-content/uploads/8/Task-PNG-Image-File.png" }}
                  style={styles.card}
                  imageStyle={styles.image}
                >
                  <View style={styles.textContainer}>
                    <Text style={styles.title}>{task.task_name}</Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            </ScaleAndOpacity>
          ))
        ) : (
          <Text style={styles.noTasksText}>No tasks available</Text>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5F6FD',
    padding: 10,
  },
  scrollView: {
    paddingBottom: 20,
  },
  card: {
    width: '100%',
    height: 180, // Increased height from 150 to 180
    marginBottom: 15,
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 3, // For Android shadow effect
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  image: {
    borderRadius: 12,
  },
  textContainer: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 165, 207, 0.75)',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  title: {
    fontSize: 18,
    fontFamily: 'Mulish-Bold',
    color: 'white',
    textAlign: 'center',
    letterSpacing: 1.1,
  },
  touchable: {
    opacity: 1,
  },
  noTasksText: {
    textAlign: 'center',
    fontSize: 18,
    color: '#555',
    marginTop: 20,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
});

