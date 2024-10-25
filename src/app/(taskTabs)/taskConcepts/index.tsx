import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { CollapseableCard } from '@components/ilp/CollapsableCard'; // Assuming Card component is in the same directory
import { useEffect, useState } from 'react';
import { useRouter } from 'expo-router';
import { ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ConceptsScreen() {
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

  // Ensure selectedTask is not null before mapping concepts
  const concepts = selectedTask ? [
    {
      title: 'Science',
      subtitle: 'Physics, Electricity',
      image: require('@assets/concepts-science.png'),
      details: selectedTask.science || 'No details available', // Ensure safe access
    },
    {
      title: 'Technology',
      subtitle: 'Circuitry',
      image: require('@assets/concepts-technology.png'),
      details: selectedTask.technology || 'No details available',
    },
    {
      title: 'Engineering',
      subtitle: 'Design',
      image: require('@assets/concepts-engineering.png'),
      details: selectedTask.engineering || 'No details available',
    },
    {
      title: 'Maths',
      subtitle: 'Geometry',
      image: require('@assets/concepts-maths.png'),
      details: selectedTask.maths || 'No details available',
    },
    {
      title: 'Key Skills',
      subtitle: 'Concepts covered in this Task',
      image: require('@assets/concepts-keyskills.png'),
      details: selectedTask.key_skills || 'No details available',
    },
  ] : [];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>STEM Concepts</Text>
      {concepts.map((concept, index) => (
        <CollapseableCard key={index} item={concept} />
      ))}
      <View style={styles.bottomSpacer} /> 
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    paddingBottom: 32, // Extra space at the bottom of the scroll view
    backgroundColor: '#f0f8ff',
  },
  title: {
    fontSize: 26, // Increased font size for better visibility
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
    textAlign: 'center', // Centered title for a better layout
  },
  bottomSpacer: {
    height: 16, // Spacer to ensure padding at the bottom
  },
});
