import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter, Stack } from 'expo-router';  // Import useRouter from expo-router

export default function HomeScreen() {
  const router = useRouter();  // Get the router instance

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Task Dashboard</Text>
      <Stack.Screen options={{ title: 'Tasks' }} />

      <View style={styles.gridContainer}>
        <TouchableOpacity 
          style={styles.gridItem}
          onPress={() => router.push('/taskVideo')}  // Navigate using router.push
        >
          <Image source={require('@assets/task-videos.png')} style={styles.icon} />
          <Text>Videos</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.gridItem}
          onPress={() => router.push('/taskNotes')}  // Navigate using router.push
        >
          <Image source={require('@assets/task-notes.png')} style={styles.icon} />
          <Text>Notes</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.gridItem}
          onPress={() => router.push('/taskConcepts')}  // Navigate using router.push
        >
          <Image source={require('@assets/task-concepts.png')} style={styles.icon} />
          <Text>Concepts</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.gridItem}
          onPress={() => router.push('/taskSubmission1')}  // Navigate using router.push
        >
          <Image source={require('@assets/task-submission.png')} style={styles.icon} />
          <Text>Submissions</Text>
        </TouchableOpacity>
      </View>      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f8ff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  gridContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginBottom: 16,
  },
  gridItem: {
    width: '45%',
    backgroundColor: '#fff',
    padding: 16,
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 16,
    elevation: 2,
  },
  icon: {
    width: 48,
    height: 48,
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 8,
    color: '#333',
  },
  videoList: {
    flexDirection: 'column',
  },
  videoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  videoThumbnail: {
    width: 80,
    height: 80,
    marginRight: 16,
  },
  videoTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
});
