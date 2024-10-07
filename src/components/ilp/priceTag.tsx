import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

// Define the types for the props
interface PriceTagProps {
  price: number;
  mrp: number;
  discount: number;
  ratings: number;
  ratingCount: string;
}

const PriceTag: React.FC<PriceTagProps> = ({ price, mrp, discount, ratings, ratingCount }) => {
  return (
    <View style={styles.container}>
      
      {/* Left Section: Discount and Offer Info */}
      <View style={styles.leftSection}>
        {/* Limited Discount Offer */}
        <View style={styles.discountOffer}>
          <Text style={styles.discountText}>Limited discount offer</Text>
        </View>

        {/* Price, Discount, and MRP */}
        <View style={styles.priceDetails}>
          <Text style={styles.discount}>{discount}% OFF</Text>
          <Text style={styles.offerPrice}>₹{price}</Text>
          <Text style={styles.mrp}>M.R.P.: ₹{mrp}</Text>
          <Text style={styles.inclusive}>Inclusive of all taxes</Text>
        </View>
      </View>

      {/* Right Section: Ratings and Buy Now Button */}
      <View style={styles.rightSection}>
        {/* Ratings */}
        <View style={styles.ratingBox}>
          <View style={styles.ratingTextContainer}>
            <Text style={styles.ratingText}>{ratings}</Text>
            <Image source={require('@assets/icon-star-white.png')} style={styles.starIcon} />
          </View>
          <Text style={styles.ratingCount}>{ratingCount} Ratings</Text>
        </View>

        {/* Buy Now Button */}
        <TouchableOpacity style={styles.buyNowButton}>
          <Text style={styles.buyNowText}>Buy Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Styles for the component
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    marginVertical: 10,
  },
  leftSection: {
    flex: 1,
  },
  rightSection: {
    alignItems: 'flex-end',
  },
  discountOffer: {
    backgroundColor: '#ff4d4d',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
    marginBottom: 8,
    alignSelf: 'flex-start',
  },
  discountText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
  priceDetails: {
    marginBottom: 10,
  },
  discount: {
    fontSize: 20,
    color: '#ff0000',
    fontWeight: 'bold',
    marginBottom: 4,
  },
  offerPrice: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  mrp: {
    fontSize: 14,
    color: '#666',
    textDecorationLine: 'line-through',
    marginBottom: 4,
  },
  inclusive: {
    fontSize: 12,
    color: '#666',
  },
  ratingBox: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 10,
  },
  ratingTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4caf50', // Green background
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  starIcon: {
    width: 18, // Adjust size as needed
    height: 18,
    marginLeft: 4, // Space between icon and text
  },
  ratingText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff', // White text color for contrast
  },
  ratingCount: {
    fontSize: 12,
    color: '#666',
    marginTop: 4, // Space between rating text and count
  },
  buyNowButton: {
    backgroundColor: '#ff9500',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buyNowText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PriceTag;
