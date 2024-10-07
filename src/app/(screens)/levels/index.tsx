import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Pressable, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from "expo-linear-gradient";
import Header from "@components/ilp/headerHomepage";
import { Tabs , Stack, router} from 'expo-router';


export default function GameSelection() {
  const router = useRouter();

  const handlePress = () => {
    router.push('/product');
  };

  return (
    <LinearGradient
      style={styles.page}
      locations={[0.5, 1]}
      colors={["rgba(0, 246, 255, 0.2)", "rgba(0, 148, 153, 0.2)"]}
    >

    <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: () => (
            <Header
              logoText="ILearn.Place" // Custom text in the header
            />
          ),
          headerRight: () => (
            <Pressable onPress={() => router.push('profileScreen')} style={{ paddingRight: 10 }}>
              <Image
                source={require("@assets/icon-profile.png")} // Profile image URL
                style={{ width: 30, height: 30, borderRadius: 15 }} // Styling the profile image
              />
            </Pressable>
          ),
          headerStyle: {
            backgroundColor: '#6495ED', 
          },
          headerTitleAlign: 'center', // Center the title
          headerTintColor: '#fff', // Text color for back button and title
        }}
      />
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Introducing "Battle Field"</Text>
      <Text style={styles.subtitle}>A Revolutionary STEM Gaming Experience</Text>

      <View style={styles.cardContainer}>
        <TouchableOpacity style={styles.card} onPress={handlePress}>
          <Image source={require('@assets/image-level-lock.png')} style={styles.cardImage} />
          <Text style={styles.cardText}>Robo Car</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={handlePress}>
          <Image source={require('@assets/image-level-lock.png')} style={styles.cardImage} />
          <Text style={styles.cardText}>Military Jeep</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={handlePress}>
          <Image source={require('@assets/image-level-lock.png')} style={styles.cardImage} />
          <Text style={styles.cardText}>Drone</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={handlePress}>
          <Image source={require('@assets/image-level-lock.png')} style={styles.cardImage} />
          <Text style={styles.cardText}>Tank</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={handlePress}>
          <Image source={require('@assets/image-level-lock.png')} style={styles.cardImage} />
          <Text style={styles.cardText}>Helicopter</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={handlePress}>
          <Image source={require('@assets/image-level-lock.png')} style={styles.cardImage} />
          <Text style={styles.cardText}>Submarine</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={handlePress}>
          <Image source={require('@assets/image-level-lock.png')} style={styles.cardImage} />
          <Text style={styles.cardText}>Bike</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={handlePress}>
          <Image source={require('@assets/image-level-lock.png')} style={styles.cardImage} />
          <Text style={styles.cardText}>Scooter</Text>
        </TouchableOpacity>
      </View>
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
  page: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "transparent",
  },
});
