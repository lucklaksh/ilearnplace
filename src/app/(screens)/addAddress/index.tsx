import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';

const AddAddressScreen = () => {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'Add Address' }} />

      <View style={styles.formSection}>
        <Text style={styles.label}>Address</Text>
        <TextInput style={styles.input} placeholder="Enter Address" />

        <Text style={styles.label}>District</Text>
        <TextInput style={styles.input} placeholder="Enter District" />

        <Text style={styles.label}>State</Text>
        <TextInput style={styles.input} placeholder="Enter State" />

        <Text style={styles.label}>PIN Code</Text>
        <TextInput style={styles.input} placeholder="Enter PIN Code" />
      </View>

      <TouchableOpacity style={styles.updateButton}>
        <Text style={styles.updateButtonText}>Update</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#00BFFF',
    padding: 15,
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
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
