import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { MaterialIcons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker'; 
import { Stack } from 'expo-router';

const EditProfileScreen = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [gender, setGender] = useState('Select Gender');

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
        <TextInput style={styles.input} placeholder="Enter Full Name" />

        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} placeholder="Enter Email" keyboardType="email-address" />

        <Text style={styles.label}>Phone Number</Text>
        <TextInput style={styles.input} placeholder="+91 9999999999" keyboardType="phone-pad" />

        <Text style={styles.label}>Gender</Text>
        <Picker
          selectedValue={gender}
          onValueChange={(itemValue) => setGender(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Select Gender" value="Select Gender" />
          <Picker.Item label="Male" value="Male" />
          <Picker.Item label="Female" value="Female" />
          <Picker.Item label="Other" value="Other" />
        </Picker>
      </View>

      <TouchableOpacity style={styles.updateButton}>
        <Text style={styles.updateButtonText}>Update</Text>
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
    right: 10,  // Adjust this value to move the icon horizontally
    bottom: 10, // Adjust this value to move the icon vertically
    backgroundColor: '#2575fc',
    borderRadius: 20,
    padding: 6, // Increased padding for better touch target
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
