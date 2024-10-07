import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Header from "@components/ilp/headerHomepage";
import ProductCard from "@components/ilp/productCard";
import ImageGalleryCard from "@components/ilp/galaryCard";
import Footer from "@components/ilp/footer";
import { Tabs, Stack, router } from 'expo-router';
import ImageSlider from "@components/ilp/imageSlider";
import ProductFooter from "@/components/ilp/productFooter";
import HomeProductCard from "@/components/ilp/homeProductCard";

const getGreetingMessage = () => {
  const currentHour = new Date().getHours();
  if (currentHour < 12) return "Good Morning!";
  if (currentHour < 18) return "Good Afternoon!";
  return "Good Evening!";
};

const ImageCard: React.FC<{ source: any }> = ({ source }) => {
  return (
    <View style={styles.card}>
      <Image source={source} style={styles.heroImage} />
    </View>
  );
};

const HomePage: React.FC = () => {
  const products = [
    {
        title: 'Military Jeep',
        price: '2167',
        rating: '4.5',
        image: require('@assets/poster2.png'), // Replace with actual image URLs
    },
    {
        title: 'My Shining Home',
        price: '2167',
        rating: '4.5',
        image: require('@assets/poster2.png'),
    },
    {
        title: 'Robo Car',
        price: '2167',
        rating: '4.5',
        image: require('@assets/poster2.png'),
    },
    {
        title: 'Smart Watertank',
        price: '2167',
        rating: '4.5',
        image: require('@assets/poster2.png'),
    },
];
  const posters = [
    { id: '1', src: require('@assets/poster2.png'), title: 'Poster 1' },
    { id: '2', src: require('@assets/poster4.png'), title: 'Poster 2' },
    { id: '3', src: require('@assets/poster3.png'), title: 'Poster 3' },
  ];

  const handlePosterPress = (index: number) => {
    console.log(`Poster ${index + 1} clicked: ${posters[index].title}`);
  };

  return (
    <LinearGradient
      style={styles.homepage}
      locations={[0.2, 0.9]}
      colors={["#E0F7FA", "#B2EBF2"]}
    >
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>

          {/* Greeting Section */}
          <View style={styles.greetingSection}>
            <Text style={styles.greetingText}>
              {getGreetingMessage()} Hi Aspirant! Ready for adventure?
            </Text>
          </View>

          {/* Image Slider */}
          <ImageSlider posters={posters} onPosterPress={handlePosterPress} />

          {/* Search Bar */}
          <TextInput
            style={styles.searchBar}
            placeholder="Ex: Battle Field"
            accessible={true}
            accessibilityLabel="Search Field"
          />

          {/* Category Buttons */}
          <View style={styles.buttonContainer}>
            <Pressable
              style={styles.categoryButton}
              accessible={true}
              accessibilityLabel="Robo Car Button"
            >
              <Text style={styles.buttonText}>Robo Car</Text>
            </Pressable>
            <Pressable
              style={styles.categoryButton}
              accessible={true}
              accessibilityLabel="Military Jeep Button"
            >
              <Text style={styles.buttonText}>Military Jeep</Text>
            </Pressable>
          </View>

          {/* Top Picks Section */}
          <Text style={styles.sectionTitle}>Top Picks</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <ProductCard
              image={require('@assets/poster2.png')}
              title="Battle Field Military Jeep"
              price="2167"
              rating="4.7"
            />
            <ProductCard
              image={require('@assets/poster2.png')}
              title="Battle Field Military Jeep"
              price="2167"
              rating="4.7"
            />
            <ProductCard
              image={require('@assets/poster2.png')}
              title="Battle Field Military Jeep"
              price="2167"
              rating="4.7"
            />
          </ScrollView>

          <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false}>
          
                {products.map((product, index) => (
                    <HomeProductCard
                        key={index}
                        title={product.title}
                        price={product.price}
                        rating={product.rating}
                        image={product.image}
                    />
                ))}
          
          </ScrollView>

          {/* Real Stories Section */}
          <Text style={styles.sectionTitle}>
            Real Stories, Memorable Childhoods
          </Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.storySection}>
              <ImageGalleryCard
                image={require('@assets/poster2.png')}
                content='"Inspire children to think for themselves, not just follow what they are told."'
              />
              <ImageGalleryCard
                image={require('@assets/poster2.png')}
                content='"Inspire children to think for themselves, not just follow what they are told."'
              />
              <ImageGalleryCard
                image={require('@assets/poster2.png')}
                content='"Inspire children to think for themselves, not just follow what they are told."'
              />
            </View>
          </ScrollView>

          <Image 
          source={require('@assets/quote.jpg')} 
          style={styles.bannerImage} 
        />
        <ProductFooter />

        </ScrollView>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  bannerImage: {
    width: '100%', // Full width of the screen
    height: 140,
    resizeMode: 'cover', // Ensures the image covers the entire area without distortion
    marginBottom: 15,
    borderRadius: 10, // Rounded corners
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
    overflow: 'hidden',
  },
  
  imageGallery: {
    marginVertical: 10, // Add some vertical space
  },
  card: {
    width: 150, // Width of each card
    height: 100, // Height of the card
    borderRadius: 10,
    overflow: 'hidden',
    marginRight: 10, // Space between cards
    backgroundColor: '#FFF', // Card background color
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2, // For Android shadow
  },
  heroImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover', // Adjusts the image to cover the card
  },
  hero: {
    width: '100%',
    height: 200, // Height for hero section
    backgroundColor: '#E0E0E0', // Light gray background color for the hero section
    marginBottom: 20, // Spacing from content below
  },
  heroText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
    position: 'absolute',
    bottom: 20, // Positioning text at the bottom of the hero section
    left: 20, // Spacing from the left side
  },
  container: {
    flex: 1,
    backgroundColor: "#F0F8FF",
  },
  scrollContainer: {
    padding: 20,
  },
  greetingSection: {
    marginBottom: 20,
    alignItems: "center",
  },
  greetingText: {
    fontSize: 22,
    fontWeight: "600",
    color: "#000",
  },
  button: {
    backgroundColor: 'red',
    borderRadius: 50,
    flexDirection: "row",
    justifyContent: "center",
    width: 200, // Adjusted button width
  },
  
  searchBar: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    borderColor: "#DDD",
    borderWidth: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  categoryButton: {
    flex: 1,
    backgroundColor: "#FF6347",
    paddingVertical: 10,
    borderRadius: 20,
    marginHorizontal: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    marginVertical: 10,
  },
  productList: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  storySection: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  homepage: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "transparent",
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333', // Dark gray color for the title
    marginVertical: 10,
    textAlign: 'center', // Center the title text
  },
});


export default HomePage;