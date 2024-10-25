import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, ActivityIndicator } from 'react-native';
import { useRouter, Stack } from 'expo-router';
import { LinearGradient } from "expo-linear-gradient";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function GameSelection() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [levels, setLevels] = useState([]);
  const [selectedGame, setSelectedGame] = useState(null); // State for selected game

  const fetchLevels = async () => {
    try {
      setLoading(true);

      // Retrieve data from AsyncStorage
      const allInfo = await AsyncStorage.getItem('allInfo');
      const selectedGameData = await AsyncStorage.getItem('selectedGame');

      if (!allInfo || !selectedGameData) {
        throw new Error('Missing game data or selectedGame');
      }

      // Parse the stored allInfo data
      const parsedAllInfo = JSON.parse(allInfo);
      const parsedSelectedGame = JSON.parse(selectedGameData);

      // Set selected game in state
      setSelectedGame(parsedSelectedGame);

      // Find the game with the matching selectedGameId
      const games = parsedAllInfo.game.find(game => game.id === parseInt(parsedSelectedGame.id));

      if (!games) {
        throw new Error('Game not found');
      }

      // Set levels from the selected game
      setLevels(games.levels);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLevels();
  }, []);

  const handlePress = async (level) => {
    try {
      await AsyncStorage.setItem('selectedlevel', JSON.stringify(level));
      router.push('/product'); 
    } catch (error) {
      console.error('Failed to store level:', error);
    }
  };

  return (
    <LinearGradient
      style={styles.page}
      locations={[0.5, 1]}
      colors={["rgba(0, 246, 255, 0.2)", "rgba(0, 148, 153, 0.2)"]}
    >
      <Stack.Screen options={{ title: 'Games' }} />
      <ScrollView contentContainerStyle={styles.container}>
        {loading ? (
          <ActivityIndicator size="large" color="#00BFFF" />
        ) : error ? (
          <Text style={styles.errorText}>{error}</Text>
        ) : (
          <>
            {selectedGame && ( // Check if selectedGame is available
              <>
                <Text style={styles.title}>Introducing {selectedGame.game_type}!</Text>
                <Text style={styles.subtitle}>A Revolutionary STEM Gaming Experience</Text>
              </>
            )}
            <View style={styles.cardContainer}>
              {levels.map(level => (
                <TouchableOpacity key={level.id} style={styles.card} onPress={() => handlePress(level)}>
                  <Image source={{ uri: level.photo }} style={styles.cardImage} />
                  <Text style={styles.cardText}>{level.level_name}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </>
        )}
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#E6F7FF',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
  },
  cardImage: {
    width: 100,
    height: 100,
  },
  cardText: {
    fontSize: 16,
    marginTop: 10,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
  page: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "transparent",
  },
});
