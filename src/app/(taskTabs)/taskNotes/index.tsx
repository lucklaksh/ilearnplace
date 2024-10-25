import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Linking, ActivityIndicator } from 'react-native';
import TaskCard from '@components/ilp/cardTask'; // Ensure this path is correct
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedTask, setSelectedTask] = useState(null);
  const [pdfs, setPdfs] = useState([]);

  const fetchTask = async () => {
    try {
      setLoading(true);
      const selectedTaskData = await AsyncStorage.getItem('selectedTask');
      if (!selectedTaskData) {
        throw new Error('Missing game data or selected task');
      }
      const parsedSelectedTask = JSON.parse(selectedTaskData);
      setSelectedTask(parsedSelectedTask);

      // Extract PDFs from the task media
      const pdfList = parsedSelectedTask.task_media
        .filter(media => media.media_type === 'document')
        .map(media => ({
          title: media.media_title,
          pdfUrl: media.media_path,
          image: require('@assets/task-notes1.png'), // Use a static image
        }));

      setPdfs(pdfList);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTask();
  }, []);

  const handleCardPress = async (pdfUrl) => {
    const supported = await Linking.canOpenURL(pdfUrl);
    if (supported) {
      await Linking.openURL(pdfUrl);
    } else {
      console.log(`Don't know how to open this URL: ${pdfUrl}`);
    }
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#00BFFF" />;
  }

  if (error) {
    return <Text style={{ color: 'red' }}>{error}</Text>;
  }

  return (
    <ScrollView>
      <View>
        {pdfs.length > 0 ? (
          pdfs.map((pdf, index) => (
            <TaskCard
              key={index}
              item={pdf} // Pass the PDF object
              isHidden={false}
              onPress={() => handleCardPress(pdf.pdfUrl)} // Handle card press to open the PDF
            />
          ))
        ) : (
          <Text style={{ textAlign: 'center', margin: 20 }}>No PDFs available</Text>
        )}
      </View>
    </ScrollView>
  );
};

export default App;
