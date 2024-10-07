import React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { useRouter ,Stack} from 'expo-router'; // Import the useRouter from expo-router

const PaymentScreen1 = () => {
  const router = useRouter(); // Initialize the router

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'Make Payment' }} />
      <Text style={styles.title}>Payment</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>DELIVERY ADDRESS</Text>
        <TouchableOpacity style={styles.sectionButton}>
          <Text style={styles.buttonText}>ADD NEW ADDRESS</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>ORDER SUMMARY</Text>
        <View style={styles.inputContainer}>
          <TextInput placeholder="Enter coupon code" style={styles.input} />
          <TouchableOpacity style={styles.applyButton}>
            <Text style={styles.buttonText}>APPLY</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity 
          style={styles.proceedButton} 
          onPress={() => router.push('/payment2')} // Navigate to /payment2 when clicked
        >
          <Text style={styles.proceedButtonText}>PROCEED PAYMENT</Text>
        </TouchableOpacity>
      </View>
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
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    marginBottom: 10,
    color: '#333',
  },
  sectionButton: {
    backgroundColor: '#F0F0F0',
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: '#007BFF',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  applyButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
  },
  proceedButton: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  proceedButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default PaymentScreen1;
