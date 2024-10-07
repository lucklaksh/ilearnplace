import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';

const PaymentScreen2 = () => {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'Make Payment' }} />
      <Text style={styles.title}>Payment</Text>

      <View style={styles.qrCodeContainer}>
        <Image
          source={{ uri: 'https://i.imgur.com/ZBG2ZT2.png' }}
          style={styles.qrCode}
        />
        <Text style={styles.paymentText}>Payment via UPI</Text>
      </View>

      <TouchableOpacity style={styles.confirmButton}>
        <Text style={styles.confirmButtonText}>Confirm Payment</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  qrCodeContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  qrCode: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  paymentText: {
    fontSize: 16,
    color: '#333',
  },
  confirmButton: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  confirmButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default PaymentScreen2;