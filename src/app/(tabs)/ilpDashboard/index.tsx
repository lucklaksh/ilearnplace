import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function GameCategories() {
  const router = useRouter();
  const [gameCategories, setGameCategories] = useState([]); // State to hold game categories
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    const fetchGameCategories = async () => {
      try {
        const token = await AsyncStorage.getItem('authToken'); // Retrieve the token from AsyncStorage
        if (!token) {
          Alert.alert('Error', 'You must be logged in to access game categories.');
          return;
        }

        const response = await fetch('http://65.0.178.227:8000/ilpapi/allstudentinfo', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `${token}`, // Use Bearer token format
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch game categories');
        }

        const data = await response.json();
        await AsyncStorage.setItem('allInfo', JSON.stringify(data));
        const gameData = data.game; 
        const categories = gameData.map((game) => ({
          id: game.id,
          game_name: game.game_name,
          game_type: game.game_type,
          game_count: game.levels.length, // Count the number of levels in each game
        }));
        console.log(categories);
        
        setGameCategories(categories); // Assuming the API returns a 'game' field
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGameCategories();
  }, []);

  const handleGameSelection = async (game) => {
    try {
      await AsyncStorage.setItem('selectedGame', JSON.stringify(game)); // Store the game object as a string
      console.log('Game stored:', game);
      router.push('/levels'); // Navigate to the levels page or any other screen
    } catch (error) {
      console.error('Failed to store game:', error);
    }
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#00BFFF" style={{ flex: 1 }} />; // Show loading indicator
  }

  if (error) {
    return <Text style={styles.errorText}>{error}</Text>; // Show error message
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Game Categories</Text>

      {gameCategories.map((category, index) => (
        <TouchableOpacity 
          key={index} 
          style={[styles.card, { backgroundColor: getColor(index) }]} // Use a function to set color
          onPress={() => handleGameSelection(category)} // Set gameId in AsyncStorage on press
        >
          <Text style={styles.gameNameText}>{category.game_name}</Text> 
          <Text style={styles.gameTypeText}>{category.game_type}</Text> 
        </TouchableOpacity>
      ))}
    </View>
  );
}

// Function to get background color based on index with attractive colors
const getColor = (index) => {
  const colors = ['#FF6F61', '#FFD700', '#8EE4AF', '#96C8DA', '#FFB347', '#77DD77', '#FF6961', '#AEC6CF'];
  return colors[index % colors.length];
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#E6F7FF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  gameNameText: {
    fontSize: 16, // Make game name smaller
    fontWeight: 'normal',
    color: '#333',
  },
  gameTypeText: {
    fontSize: 22, // Make game type larger and bolder
    fontWeight: 'bold',
    color: '#000',
    marginTop: 10,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
});
