import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter, Stack } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width } = Dimensions.get('window');

const ProfileScreen = () => {
  const [profileData, setProfileData] = useState(null); // State to store profile data
  const [addressess, setAddressess] = useState([])
  const [Token, setToken] = useState(null); // State to store token
  const router = useRouter();

  useEffect(() => {
    // Function to fetch the token from AsyncStorage
    const getTokenAndFetchProfile = async () => {
      try {
        const storedToken = await AsyncStorage.getItem('authToken'); 
        // const storedToken = await AsyncStorage.getItem('phoneNumber');
        if (storedToken) {
          setToken(storedToken); // Store token in state
          fetchProfileData(storedToken); // Fetch profile data using the token
        } else {
          console.error('No token found');
        }
      } catch (error) {
        console.error('Error fetching token:', error);
      }
    };

    // Fetch profile data from API
    const fetchProfileData = async (token) => {
      try {
        console.log(token)
        const response = await fetch('http://65.0.178.227:8000/ilpapi/create/student', {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `${token}`, // Use the token passed as an argument
          },
        });
        if (response.ok) {
          const data = await response.json();
          setProfileData(data.stu); // Assuming `data.stu` contains the relevant profile data
          setAddressess(data.add);
          const profile = JSON.stringify(data.stu)
          const address = JSON.stringify(data.add)
          await AsyncStorage.setItem('address', address);
          await AsyncStorage.setItem('profile', profile);
        } else {
          console.error('Error fetching profile data');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };
    getTokenAndFetchProfile(); // Call the function to get the token and fetch data
  }, []);

  if (!profileData) {
    // Show a loading message while the data is being fetched
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }
  console.log(addressess)
  const combinedAddress = addressess.length > 0 ? addressess.map(address => 
    `${address.address}, ${address.district}, ${address.state}, ${address.pincode}`
  ).join(' | ') : 'No Address Provided';

  return (
    <ScrollView style={styles.container}>
      <Stack.Screen options={{ title: 'Profile' }} />
      
      {/* Gradient Header */}
      <LinearGradient colors={['#00aaff', '#0077cc']} style={styles.header}>
        {/* Profile Image Section */}
        <View style={styles.profileContainer}>
          <Image
            source={{ uri: `http://65.0.178.227:8000/ilpapi${profileData.photo}` }} // Replace with actual profile image from API
            style={styles.profileImage}
          />
          {/* Pencil Icon for editing profile image */}
          <TouchableOpacity style={styles.editIcon} onPress={() => router.push('/editProfile')}>
            <MaterialIcons name="edit" size={24} color="#2575fc" />
          </TouchableOpacity>
        </View>
      </LinearGradient>

      {/* Name, Email, and Phone Number */}
      <View style={styles.profileInfo}>
        <Text style={styles.nameText}>{profileData.name || 'No Name'}</Text>
        <Text style={styles.contactText}>{profileData.email || 'No Email'}</Text>
        <Text style={styles.contactText}>{profileData.contact || 'No Contact'}</Text>
      </View>

      {/* Address Section */}
      <View style={styles.sectionWrapper}>
        <Text style={styles.sectionTitle}>Address</Text>
        <View style={styles.card}>
          <View style={styles.addressHeader}>
            <Text style={styles.addressTitle}>Address</Text>
            <TouchableOpacity onPress={() => router.push('/addAddress')}>
              <MaterialIcons name="edit" size={24} color="#2575fc" />
            </TouchableOpacity>
          </View>
          <View style={styles.divider} />
          <View style={styles.addressContent}>
            <Text style={styles.addressText}>{combinedAddress}</Text>
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
    top: 130,
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
    marginTop: 110,
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
    marginTop: 30,
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
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProfileScreen;
