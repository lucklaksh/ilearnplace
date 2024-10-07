// app/index.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function GameCategories() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Game Categories</Text>
      
      <TouchableOpacity 
        style={[styles.card, { backgroundColor: '#F0F9FF' }]}
        onPress={() => router.push('/levels')}
      >
        <Text style={styles.cardText}>Battle Field</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.card, { backgroundColor: '#FFD4D4' }]}
        onPress={() => router.push('/levels')}
      >
        <Text style={styles.cardText}>Smart City</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.card, { backgroundColor: '#FF9D9D' }]}
        onPress={() => router.push('/levels')}
      >
        <Text style={styles.cardText}>Advanced Smart City</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.card, { backgroundColor: '#FFD700' }]}
        onPress={() => router.push('/levels')}
      >
        <Text style={styles.cardText}>Advanced Battle Field</Text>
      </TouchableOpacity>
    </View>
  );
}

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
  cardText: {
    fontSize: 18,
  },
});
