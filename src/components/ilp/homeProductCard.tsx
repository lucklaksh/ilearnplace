import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // For star icon
import { useRouter } from 'expo-router';

// Define the prop types
interface ProductCardProps {
  title: string;
  image: any; // Image source can be a URL or require statement
  price: string;
  rating: string;
}

const HomeProductCard: React.FC<ProductCardProps> = ({ title, image, price, rating }) => {
    const router = useRouter()
  return (
    <TouchableOpacity style={styles.card} onPress={() => router.push('/product')}>
      <Image source={image} style={styles.productImage} />

      <View style={styles.detailsContainer}>
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>₹ {price} INR</Text>
          <View style={styles.ratingContainer}>
            <Text style={styles.rating}>{rating}</Text>
            <FontAwesome name="star" size={16} color="green" />
          </View>
        </View>
        <TouchableOpacity style={styles.button} onPress={()=> router.push('/payment1')}>
          <Text style={styles.buttonText}>Buy Now  🛒</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 2,
    borderColor: '#FFC107', // Yellow border
    borderRadius: 10,
    overflow: 'hidden',
    width: 200,
    backgroundColor: '#fff',
    margin: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  productImage: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
    backgroundColor: '#f9f9f9', // Light background for image
  },
  detailsContainer: {
    padding: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#E53935', // Red color for price
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E0F7FA', // Light blue background for rating
    borderRadius: 5,
    paddingHorizontal: 5,
    paddingVertical: 2,
  },
  rating: {
    fontSize: 14,
    color: '#388E3C', // Green color for rating text
    marginRight: 5,
  },
  button: {
    backgroundColor: '#FF9800',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#ffffff', 
  },
});

export default HomeProductCard;
