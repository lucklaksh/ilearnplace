import React from 'react';
import { View, FlatList, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // For star icon

// Define the prop types for a single product
interface ProductProps {
  title: string;
  image: any; // Image can be a URL or require statement
  price: string;
  rating: string;
}

// Define the prop types for the combined component
interface ProductListProps {
  products: ProductProps[];
  onPosterPress: (index: number) => void; // Callback for when a product is pressed
}

// Combined component for rendering the products
const ProductList: React.FC<ProductListProps> = ({ products, onPosterPress }) => {
  // Render a single product card
  const renderProductCard = ({ item, index }: { item: ProductProps; index: number }) => {
    return (
      <TouchableOpacity style={styles.card} onPress={() => onPosterPress(index)}>
        <Image
          source={ item.image } // Use URI for remote images
          style={styles.productImage}
        />
        <View style={styles.detailsContainer}>
          <Text style={styles.title} numberOfLines={2}>
            {item.title}
          </Text>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>₹ {item.price} INR</Text>
            <View style={styles.ratingContainer}>
              <Text style={styles.rating}>{item.rating}</Text>
              <FontAwesome name="star" size={16} color="green" />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderProductCard}
        keyExtractor={(item) => item.title} // Use a unique key for each item
        horizontal
        showsHorizontalScrollIndicator={false} // Hide scroll indicator
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
  },
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

export default ProductList;
