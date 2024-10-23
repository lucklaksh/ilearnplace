import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert, ScrollView, ActivityIndicator } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { MaterialIcons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker'; 
import { Stack } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

const EditProfileScreen = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [gender, setGender] = useState('Select Gender');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false); // Loading state

  // Fetch profile data from AsyncStorage
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const profileData = await AsyncStorage.getItem('profile');
        if (profileData) {
          const parsedData = JSON.parse(profileData);
          setFullName(parsedData.name || '');
          setEmail(parsedData.email || '');
          setPhone(parsedData.contact || '');
          setGender(parsedData.gender || 'Select Gender'); // Default to 'Select Gender'
          if (parsedData.photo) {
            setProfileImage(`http://65.0.178.227:8000/ilpapi${parsedData.photo}`); // Update with the full URL if needed
          }
        }
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };

    fetchProfileData();
  }, []);

  const handleImageUpload = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      Alert.alert('Permission to access camera roll is required!');
      return;
    }

    // Launch image picker
    const result = await ImagePicker.launchImageLibraryAsync();

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri); 
    }
  };

  const updateProfile = async () => {
    // Input validation
    if (!fullName || !email || !phone || gender === 'Select Gender') {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    setLoading(true); // Set loading to true while the update is happening

    try {
      const token = await AsyncStorage.getItem('authToken'); // Retrieve the token from AsyncStorage
      if (!token) {
        Alert.alert('Error', 'You must be logged in to update your profile.');
        return;
      }
      console.log(fullName)
      console.log(email)
      const response = await fetch('http://65.0.178.227:8000/ilpapi/student/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
        body: JSON.stringify({
          name: fullName,  // Corrected to match API
          email: email,         // Corrected to match API
          contact: phone,         // Corrected to match API
          gender: gender === 'Select Gender' ? null : gender, // Match API expectation
        }),
      });

      // Log the response to debug
      const responseText = await response.text(); // Get response as text for debugging
      console.log('Response:', responseText); // Log the response

      if (!response.ok) {
        const errorData = JSON.parse(responseText); // Try parsing the error data
        throw new Error(errorData.message || 'Failed to update profile');
      }

      const data = JSON.parse(responseText); // Assuming the response is in JSON format
      Alert.alert('Success', data.message); // Show success message

    } catch (error) {
      Alert.alert('Error', error.message); // Show error message
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Stack.Screen options={{ title: 'Edit Profile' }} />
      {/* Profile Image Section */}
      <View style={styles.profileContainer}>
        <Image
          source={profileImage ? { uri: profileImage } : { uri: 'https://via.placeholder.com/150' }}
          style={styles.profileImage}
        />
        <TouchableOpacity style={styles.editIcon} onPress={handleImageUpload}>
          <MaterialIcons name="camera-alt" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={styles.formSection}>
        <Text style={styles.label}>Full Name</Text>
        <TextInput 
          style={styles.input} 
          placeholder="Enter Full Name" 
          value={fullName} 
          onChangeText={setFullName} 
        />

        <Text style={styles.label}>Email</Text>
        <TextInput 
          style={styles.input} 
          placeholder="Enter Email" 
          keyboardType="email-address" 
          value={email} 
          onChangeText={setEmail} 
        />

        <Text style={styles.label}>Phone Number</Text>
        <TextInput 
          style={styles.input} 
          placeholder="+91 9999999999" 
          keyboardType="phone-pad" 
          value={phone} 
          onChangeText={setPhone} 
        />

        <Text style={styles.label}>Gender</Text>
        <Picker
          selectedValue={gender}
          onValueChange={(itemValue) => setGender(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Select Gender" value="Select Gender" />
          <Picker.Item label="Male" value="Male" />
          <Picker.Item label="Female" value="Female" />
        </Picker>
      </View>

      <TouchableOpacity style={styles.updateButton} onPress={updateProfile}>
        {loading ? (
          <ActivityIndicator size="small" color="#fff" /> // Loading indicator
        ) : (
          <Text style={styles.updateButtonText}>Update</Text>
        )}
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  profileContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 4,
    borderColor: '#ccc',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
  },
  editIcon: {
    position: 'absolute',
    right: 10,
    bottom: 10,
    backgroundColor: '#2575fc',
    borderRadius: 20,
    padding: 6,
    borderWidth: 1,
    borderColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
  },
  formSection: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
  },
  picker: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    marginBottom: 15,
  },
  updateButton: {
    backgroundColor: '#00BFFF',
    padding: 15,
    borderRadius: 10,
    margin: 20,
    alignItems: 'center',
  },
  updateButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default EditProfileScreen;
