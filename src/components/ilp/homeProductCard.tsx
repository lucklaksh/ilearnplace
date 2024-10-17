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
    const router = useRouter();
  return (
    <TouchableOpacity style={styles.card} onPress={() => router.push('/product')}>
      <Image source={image} style={styles.productImage} />

      <View style={styles.detailsContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.title} numberOfLines={2}>
            {title}
          </Text>
          <Text style={styles.price}>₹ {price} INR</Text>
        </View>
        <View style={styles.rightContainer}>
          <View style={styles.ratingContainer}>
            <Text style={styles.rating}>{rating}</Text>
            <FontAwesome name="star" size={16} color="green" />
          </View>
          <TouchableOpacity style={styles.button} onPress={() => router.push('/payment1')}>
            <Text style={styles.buttonText}>🛒</Text>
          </TouchableOpacity>
        </View>
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
    height: 150, // Larger image height for 2/3 of the card
    resizeMode: 'contain',
    backgroundColor: '#f9f9f9', // Light background for image
  },
  detailsContainer: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textContainer: {
    width: '60%', // Title and price take 60% of the card's width
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  price: {
    fontSize: 18, // Bigger font for the price
    fontWeight: 'bold',
    color: '#E53935', // Red color for price
  },
  rightContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    width: '40%', // Right side for rating and button occupies 40%
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E0F7FA', // Light blue background for rating
    borderRadius: 5,
    paddingHorizontal: 5,
    paddingVertical: 2,
    marginBottom: 5,
  },
  rating: {
    fontSize: 14,
    color: '#388E3C', // Green color for rating text
    marginRight: 5,
  },
  button: {
    backgroundColor: '#FFC107', // Matching the card border color for consistency
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 4, // Reduced padding for a more compact appearance
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16, // Slightly smaller text size for the button
    color: '#333', // Use a subtle color instead of pure white
  },
});

export default HomeProductCard;
