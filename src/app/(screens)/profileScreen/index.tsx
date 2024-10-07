import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter, Stack } from 'expo-router';

const { width } = Dimensions.get('window');

const ProfileScreen = () => {
  const router= useRouter()
  return (
    <ScrollView style={styles.container}>
      <Stack.Screen options={{ title: 'Profile' }} />
      {/* Gradient Header */}
      <LinearGradient colors={['#00aaff', '#0077cc']} style={styles.header}>
        {/* Profile Image Section */}
        <View style={styles.profileContainer}>
          <Image
            source={{ uri: 'https://via.placeholder.com/150' }} // Replace with actual profile image
            style={styles.profileImage}
          />
          {/* Pencil Icon for editing profile image */}
          <TouchableOpacity style={styles.editIcon} onPress={()=>router.push('/editProfile')}>
            <MaterialIcons name="edit" size={24} color="#2575fc" />
          </TouchableOpacity>
        </View>
      </LinearGradient>

      {/* Name, Email, and Phone Number */}
      <View style={styles.profileInfo}>
        <Text style={styles.nameText}>Puerto Rico</Text>
        <Text style={styles.contactText}>youremail@domain.com</Text>
        <Text style={styles.contactText}>+101 234 567 89</Text>
      </View>

      {/* Address Section */}
      <View style={styles.sectionWrapper}>
        <Text style={styles.sectionTitle}>Address</Text>
        <View style={styles.card}>
          <View style={styles.addressHeader}>
            <Text style={styles.addressTitle}>Home Address</Text>
            <TouchableOpacity onPress={()=> router.push('/addAddress')}>
              <MaterialIcons name="edit" size={24} color="#2575fc" />
            </TouchableOpacity>
          </View>
          <View style={styles.divider} />
          <View style={styles.addressContent}>
            <Text style={styles.addressText}>#11, ABC Layout, Xyz layout, BN pura</Text>
            <Text style={styles.addressText}>Bangalore, Karnataka</Text>
            <Text style={styles.addressText}>PIN Code: 560098</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  header: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    position: 'relative',
  },
  profileContainer: {
    position: 'absolute',
    top: 130, // Adjust to position half of the profile image below the header
    zIndex: 2,
    alignItems: 'center',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 4,
    borderColor: '#fff',
  },
  editIcon: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 4,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  profileInfo: {
    marginTop: 110, // Adjust for space between the profile image and text (name, email, phone)
    alignItems: 'center',
  },
  nameText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  contactText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 3,
    textAlign: 'center',
  },
  sectionWrapper: {
    paddingHorizontal: 20,
    marginTop: 30, // Add more space between the profile info and address section
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    marginBottom: 20,
  },
  addressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addressTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2575fc',
  },
  divider: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 15,
  },
  addressContent: {
    flexDirection: 'column',
  },
  addressText: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
});

export default ProfileScreen;
