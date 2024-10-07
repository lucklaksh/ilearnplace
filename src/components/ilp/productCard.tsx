import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // For star icon

// Define the prop types
interface ProductCardProps {
  title: string;
  image: any;
  price: string;
  rating: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, image, price, rating }) => {
  return (
    <TouchableOpacity style={styles.card}>
 
      <Image
        source={ image } // Image URL passed as a prop
        style={styles.productImage}
      />

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
});

export default ProductCard;
