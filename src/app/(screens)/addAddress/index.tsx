import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Stack, useRouter } from 'expo-router';  // Import useRouter from expo-router
import AsyncStorage from '@react-native-async-storage/async-storage';

const AddAddressScreen = () => {
  const [address, setAddress] = useState('');
  const [district, setDistrict] = useState('');
  const [state, setState] = useState('');
  const [pincode, setPincode] = useState('');
  const [addressId, setAddressId] = useState(null); // State for addressId

  const router = useRouter(); // Initialize the router

  // Fetching address from AsyncStorage and pre-filling the form
  useEffect(() => {
    const fetchAddressId = async () => {
      try {
        const storedAddress = await AsyncStorage.getItem('address');
        if (storedAddress) {
          const parsedAddress = JSON.parse(storedAddress); // Parse the string into an array/object
          if (parsedAddress.length > 0) {
            // Prefill the form fields with the first address from the array
            setAddress(parsedAddress[0].address || '');
            setDistrict(parsedAddress[0].district || '');
            setState(parsedAddress[0].state || '');
            setPincode(parsedAddress[0].pincode || '');
            setAddressId(parsedAddress[0].id); // Set addressId from parsed data
          }
        }
      } catch (error) {
        console.error('Error fetching address ID:', error);
      }
    };
    fetchAddressId();
  }, []);

  // Function to update or create the address
  const updateOrCreateAddress = async () => {
    try {
      const token = await AsyncStorage.getItem('authToken'); // Get the token from AsyncStorage
      if (!token) {
        throw new Error('Authorization token is missing.');
      }

      let response;

      if (addressId) {
        // If addressId exists, update the address (PUT request)
        response = await fetch(`http://65.0.178.227:8000/ilpapi/student/address`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `${token}`,
          },
          body: JSON.stringify({
            address_id: addressId,
            address,
            state,
            district,
            pincode,
          }),
        });
      } else {
        // If no addressId, create a new address (POST request)
        response = await fetch(`http://65.0.178.227:8000/ilpapi/student/address`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `${token}`,
          },
          body: JSON.stringify({
            address,
            state,
            district,
            pincode,
          }),
        });
      }

      if (!response.ok) {
        throw new Error('Failed to submit address');
      }

      const data = await response.json();
      
      // Use Alert with a callback to navigate after the alert is dismissed
      
      Alert.alert('Success', data.message, [
        {
          text: 'OK',
          onPress: () => router.push('profileScreen'), // Navigate after dismissing the alert
        },
      ]);

      if (!addressId) {
        // If a new address was created, store the new address in AsyncStorage
        await AsyncStorage.setItem('address', JSON.stringify([data.data])); // Assuming 'data.data' contains the new address
        setAddressId(data.data.id); // Update the addressId with the newly created address
      }

    } catch (error) {
      Alert.alert('Error', error.message); // Display error message
    }
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'Edit Address' }} />

      <View style={styles.formSection}>
        <Text style={styles.label}>Address</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Address"
          value={address}
          onChangeText={setAddress}
        />

        <Text style={styles.label}>District</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter District"
          value={district}
          onChangeText={setDistrict}
        />

        <Text style={styles.label}>State</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter State"
          value={state}
          onChangeText={setState}
        />

        <Text style={styles.label}>PIN Code</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter PIN Code"
          value={pincode}
          onChangeText={setPincode}
          keyboardType="numeric"
        />
      </View>

      <TouchableOpacity style={styles.updateButton} onPress={updateOrCreateAddress}>
        <Text style={styles.updateButtonText}>{addressId ? 'Update' : 'Create'} Address</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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

export default AddAddressScreen;
