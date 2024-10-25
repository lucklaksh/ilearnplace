import React, {useState, useEffect} from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity ,Dimensions,Linking} from 'react-native';
import { useRouter } from 'expo-router';
import ImageSlider from "@components/ilp/imageSlider";
import PriceTag from '@/components/ilp/priceTag';
import ProductCard from "@components/ilp/productCard";
import { ImageComponent, ActivityIndicator } from 'react-native';
import ExpandableText from '@/components/ilp/overview';
import ImageGalleryCard from "@components/ilp/galaryCard";
import VideoCard from '@/components/ilp/videoCard';
import { LinearGradient } from 'expo-linear-gradient';
import ProductFooter from '@/components/ilp/productFooter';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ProductList from "@components/ilp/productCard";

interface Poster {
  id: string;
  src: any; 
  title: string;
}
// Main Product Page Component
const ProductPage = () => {
  const [showChatButton, setShowChatButton] = useState(false);
  const router = useRouter()


  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [gallery, setGallery] = useState([]);
  const [features, setFeatures] = useState([]);
  const [components, setComponents] = useState([]);
  const [products, setProducts] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);

  function calculateDiscountedPrice(price: number, discount: number): number {
    const discountRate = discount / 100;
    const discountAmount = price * discountRate;
    const finalPrice = price - discountAmount;
  
    // Round up to the nearest integer
    return Math.ceil(finalPrice);
  }
 
  

  const fetchProduct = async () => {
    try {
      setLoading(true);

      // Retrieve data from AsyncStorage
      const allInfo = await AsyncStorage.getItem('allInfo');
      const selectedLevelData = await AsyncStorage.getItem('selectedlevel');
      const product = await AsyncStorage.getItem('allProducts');
      const feedback = await AsyncStorage.getItem('allFeedbacks');

      if (!allInfo || !selectedLevelData || !product || !feedback) {
        throw new Error('Missing game data or selected level');
      }

      // Parse the stored data
      const parsedAllInfo = JSON.parse(allInfo);
      const parsedSelectedLevel = JSON.parse(selectedLevelData);
      const parsedFeedback = JSON.parse(feedback)
      const parsedProduct = JSON.parse(product)


      // Set the selected level in state
      setSelectedLevel(parsedSelectedLevel);
      setProducts(parsedProduct);
      setFeedbacks(parsedFeedback);

      console.log(parsedSelectedLevel.level_code)
      console.log(parsedSelectedLevel.tasks)
      // Fetch media for the selected level
      const response = await fetch(`http://65.0.178.227:8000/ilpapi/level/media/${parsedSelectedLevel.level_code}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response)

      if (!response.ok) {
        throw new Error('Failed to fetch level media');
      }

      const data = await response.json();
      setGallery(data.galary || []);
      setFeatures(data.feature || []);
      setComponents(data.component || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#00BFFF" />;
  }

  if (error) {
    return <Text style={{ color: 'red' }}>{error}</Text>;
  }

  const defaultPosters: Poster[] = [
    { id: '1', src: require('@assets/poster2.png'), title: 'Poster 1' },
    { id: '2', src: require('@assets/poster4.png'), title: 'Poster 2' },
    { id: '3', src: require('@assets/poster3.png'), title: 'Poster 3' },
  ];

  const posters: Poster[] = gallery.length > 0 
  ? gallery.map(item => ({
      id: String(item.id),
      src: { uri: item.media_url},
      title: item.media_name,
    }))
  : defaultPosters;
  console.log(posters)
  const handlePosterPress = (index: number) => {
    console.log(`Poster ${index + 1} clicked: ${posters[index].title}`);
  };

  const handleScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.y;
    

    // Show Chat Button after a fixed scroll position (300)
    if (scrollPosition > 500) {
      setShowChatButton(true);
    } else {
      setShowChatButton(false);
    }

  };

  const openWhatsApp = () => {
    const whatsappNumber = '+1234567890'; // Replace with your WhatsApp number
    const message = 'Hello, I would like to inquire about your services.'; // Default message

    const url = `whatsapp://send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`;

    Linking.canOpenURL(url)
      .then((supported) => {
        if (supported) {
          return Linking.openURL(url);
        } else {
          alert('WhatsApp is not installed on your device.');
        }
      })
      .catch((err) => console.error('Error opening WhatsApp:', err));
  };


  return (
    <LinearGradient
      style={styles.container}
      locations={[0.2, 0.9]}
      colors={["#E0F7FA", "#B2EBF2"]}
    >
    <ScrollView  onScroll={handleScroll} scrollEventThrottle={16} contentContainerStyle={styles.scrollView}>
      <TouchableOpacity style={styles.banner} onPress={()=> router.push('/payment1')}>
        <Image source={require('@assets/icon-add-location.png')} style={styles.bannerIcon} />
        <Text style={styles.bannerText}>Add Delivery location and coupons to check extra discount</Text>
        <Image source={require('@assets/icon-right-arrows.png')} style={styles.bannerArrow} />
      </TouchableOpacity>

      
      <View style={styles.productCard}>
        <ImageSlider posters={posters} onPosterPress={handlePosterPress} />
        <Text style={styles.productTitle}>STEM Learning Kit - {selectedLevel.level_name} for Kids by iLearnPlace | for Boys & Girls Aged 6+ | Boost Creativity & Problem-Solving Skills | 50+ Experiments & {selectedLevel.tasks.length}+ STEM Tasks</Text>
        <Text style={styles.productSubtitle}>by iLearnPlace</Text>
      </View>

      <PriceTag 
          price={calculateDiscountedPrice(selectedLevel.price, selectedLevel.discount)}
          mrp={selectedLevel.price}
          discount={selectedLevel.discount}
          ratings={selectedLevel.ratings}
          ratingCount={'1k+'}
        />

      {/* Features Section */}
      <View style={styles.featuresSection}>
        <View style={styles.featureItem}>
          <Image source={require('@assets/icon-package1.png')} style={styles.featureIcon} />
          <Text style={styles.featureText}>Delivery in 4-5 days</Text>
        </View>
        <View style={styles.featureItem}>
          <Image source={require('@assets/icon-six-plus.png')} style={styles.featureIcon} />
          <Text style={styles.featureText}>Age: 6+</Text>
        </View>
        <View style={styles.featureItem}>
          <Image source={require('@assets/icon-content.png')} style={styles.featureIcon} />
          <Text style={styles.featureText}>Engaging Scientific Content</Text>
        </View>
        <View style={styles.featureItem}>
          <Image source={require('@assets/icon-delivery.png')} style={styles.featureIcon} />
          <Text style={styles.featureText}>Free Delivery</Text>
        </View>
      </View>
      

    
      <View style={styles.relatedProductsSection}>
        <Text style={styles.relatedTitle}>Related Products You’ll Love</Text>
        <ProductList 
            products={products} 
            onPosterPress={(index) => console.log(`Pressed product at index ${index}`)} 
          />
      </View>

      
      {/* Inside This Kit Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Inside This Kit</Text>
        <Text style={styles.sectionDescription}>Everything You Need for Hands-On Learning and Fun!</Text>
        <View style={styles.grid}>
          {components.map((item) => (
            <View key={item.id} style={styles.gridItem}>
              <Image
                source={{ uri: item.media_url }} // Dynamically load images
                style={styles.ImageComponent}
              />
            </View>
          ))}
        </View>
      </View>

      {/* Along With This, We Provide Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Along With This, We Provide</Text>
        <Text style={styles.sectionDescription}>Unlock Free Access to Exclusive Resources and Benefits</Text>
        <Text style={styles.tickMark}>✓ 293+ Hardware components</Text>
        <Text style={styles.tickMark}>✓ 50+ Experiments & 15+ STEM Tasks</Text>
        <Text style={styles.tickMark}>✓ ILP Playground & dashboard Access</Text>
        <Text style={styles.tickMark}>✓ Free STEM webinars</Text>
        <Text style={styles.tickMark}>✓ 1 month ILP STEM Club Membership</Text>
      </View>

      {/* Product Overview Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Product Overview</Text>
        <ExpandableText content={"Introduce your child to a world of fun and learning with our all-in-one STEM kit, specially designed for kids aged 6 and up. This engaging kit combines hands-on robotics and science experiments with gamified learning experiences."} />
      </View>

      {/* Our Offerings Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Our Offerings</Text>
        <Image source={require('@assets/features.jpg')} style={styles.imageFeature} resizeMode="contain"  />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Essential Features & Details</Text>
        <Text style={styles.sectionDescription}>Unlock Learning and Fun with our STEM Kit</Text>
        <Image source={require('@assets/features1.jpg')} style={styles.imageFeature} resizeMode="contain"  />
      
      </View>
      {features.map((feature) => (
        <View key={feature.id} style={styles.section}>
          <Text style={styles.sectionTitle}>{feature.media_name}</Text>
          <Text style={styles.sectionText}>{feature.media_description}</Text>
          <Image
            source={{ uri: feature.media_url }}
            style={styles.image}
          />
        </View>
      ))}

      {/* ISPL League Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Join the ISPL League!</Text>
        <Text style={styles.sectionSubtitle}>
          Innovate, Create, and Earn Amazing Cash Prizes!
        </Text>
        <Image 
          source={require('@assets/poster.jpg')} 
          style={styles.bannerImage} 
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Comming Soon</Text>
        </TouchableOpacity>
      </View>

      {/* Discover More Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Discover More</Text>
        <Text style={styles.sectionSubtitle}>
          Unlock the Genius Behind Every Innovation with Cutting-Edge STEM Creations
        </Text>
        <ProductList 
            products={products} 
            onPosterPress={(index) => console.log(`Pressed product at index ${index}`)} 
          />
        
        {/* <ScrollView horizontal={true}>
            <ProductCard
              image= {require('@assets/poster2.png')}
              title="Battle Field Military Jeep"
              price="2167"
              rating="4.7"
            />
            <ProductCard
              image= {require('@assets/poster2.png')}
              title="Battle Field Military Jeep"
              price="2167"
              rating="4.7"
            />
            <ProductCard
              image= {require('@assets/poster2.png')}
              title="Battle Field Military Jeep"
              price="2167"
              rating="4.7"
            />
        </ScrollView> */}
      </View>

      {/* Share Your Experience Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Share your Experience</Text>
        <Text style={styles.sectionSubtitle}>Real Stories, Memorable Childhoods</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.storySection}>
                {feedbacks.map((feedback) => (
                    <ImageGalleryCard
                        key={feedback.id} // Ensure each card has a unique key
                        image={feedback.image} // Assuming feedback.image contains the image source
                        content={feedback.content} // Feedback content
                    />
                ))}
            </View>
        </ScrollView>

        <TouchableOpacity style={styles.reviewButton}>
          <Text style={styles.reviewButtonText}>Write a review</Text>
        </TouchableOpacity>
      </View>

      {/* Videos Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Videos for this product</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <VideoCard videoUri="https://www.w3schools.com/html/mov_bbb.mp4" title="Video 1" />
        <VideoCard videoUri="https://www.w3schools.com/html/movie.mp4" title="Video 2" />
        <VideoCard videoUri="https://www.w3schools.com/html/mov_bbb.mp4" title="Video 3" />
      </ScrollView>
    </View>
    <ProductFooter />
    </ScrollView>
    {showChatButton && (
        <>
          <View style={styles.chatButtonContainer}>
            <TouchableOpacity style={styles.chatButton} onPress={openWhatsApp}>
              <View style={styles.chatContainer}>
                <Text style={styles.chatText}>Chat with Us</Text>
                <Image
                  source={require('@assets/logo-whatsapp.png')} // WhatsApp icon URL
                  style={styles.whatsappIcon}
                />
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.buyNowSection}>
            <TouchableOpacity style={styles.buyNowButton}>
              <Text style={styles.buyNowButtonText}>Buy Now! Bought by 1K+ users</Text>
            </TouchableOpacity>
          </View>
        </>
      )}

    </LinearGradient>
  );
};

// Styles
const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
  },
  chatButtonContainer: {
    position: 'absolute',
    bottom: 80, // Keep it above the "Buy Now" button
    right: 20, // Align it to the right
    zIndex: 2, // Ensure it appears above other elements
  },
  chatButton: {
    backgroundColor: '#4CAF50', // Green background
    borderRadius: 10,
    padding: 10,
    elevation: 3, // Android shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4, // iOS shadow
  },
  chatContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  chatText: {
    color: '#FFF',
    marginRight: 8, // Space between text and icon
  },
  whatsappIcon: {
    width: 20,
    height: 20,
  },
  buyNowSection: {
    position: 'absolute',
    bottom: 0, // Stick to the bottom of the screen
    width: Dimensions.get('window').width, // Take full width of the screen
    paddingHorizontal: 20, // Add padding for better layout
    alignItems: 'center', // Center the button horizontally
    marginBottom: 10, // Add some space below the button
  },
  buyNowButton: {
    backgroundColor: '#FF9800', // Orange background
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 20,
    width: '100%', // Full width
    alignItems: 'center',
    elevation: 3, // Android shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4, // iOS shadow
  },
  buyNowButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    padding: 16,
    alignItems: 'flex-end', // Align buttons to the right
  },
  buyNowContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#ff6f00', // Orange color for the button
    padding: 15,
    alignItems: 'center',
  },
  
  galleryContainer: {
    marginVertical: 20, // Adjust as needed for spacing
  },
  storySection: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  imageFeature: {
    width: '100%', // Take the full width of the container
    height: undefined, // Allow the height to adjust based on aspect ratio
    aspectRatio: 1.5, // Adjust this value based on your image's aspect ratio
    marginVertical: 10, // Optional: Space above and below the image
  },
    featuresSection: {
    flexDirection: 'row',           // Keeps items in a single row
    justifyContent: 'space-between', // Distributes space evenly between items
    marginVertical: 10,             // Space above and below the feature section
  },
  featureItem: {
    alignItems: 'center',           // Centers the icon and text
    width: '23%',                   // Adjust width for spacing; fit four items in a row
    marginBottom: 10,               // Space between rows if wrapping occurs
  },
  featureIcon: {
    width: 40,                      // Adjust size as needed
    height: 40,
    marginBottom: 4,                // Space between icon and text
  },
  featureText: {
    textAlign: 'center',            // Centers the text under the icon
    fontSize: 14,
    lineHeight: 18,                 // Controls spacing between lines of text
    maxWidth: '100%',               // Ensures text doesn't exceed the icon width
    flexWrap: 'wrap',               // Allows text to wrap to multiple lines if needed
  },
  buyNowText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  container: {
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 15,
    backgroundColor: '#4A90E2',
    alignItems: 'center',
  },
  pageTitle: {
    fontSize: 18,
    color: '#fff',
  },
  banner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e6f7ff',
    padding: 10,
    borderRadius: 8,
    marginVertical: 10,
  },
  bannerIcon: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
  bannerText: {
    flex: 1,
    color: '#007AFF',
    fontSize: 14,
  },
  bannerArrow: {
    width: 20,
    height: 20,
  },
  productCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
  },
  productImage: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  productSubtitle: {
    fontSize: 14,
    color: '#666',
  },
  pricingCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
  },
  offerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF3B30',
  },
  discountText: {
    fontSize: 12,
    color: '#666',
  },
  buyButton: {
    backgroundColor: '#FF9500',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  buyButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  relatedProductsSection: {
    marginVertical: 10,
  },
  relatedTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  relatedProductCard: {
    width: 150,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    marginRight: 10,
  },
  relatedProductImage: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
  },
  relatedProductPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
    textAlign: 'center',
  },
  section: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  sectionDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gridItem: {
    width: 120,  // Adjust size based on your requirement
    height: 120,  // Must be equal to width for a circle
    borderRadius: 60,  // Half of the width/height for a perfect circle
    overflow: 'hidden',  // Ensures image doesn't overflow outside the gridItem
    marginBottom: 20,  // Adds spacing between items
    justifyContent: 'center',  // Center image inside
    alignItems: 'center',
    backgroundColor: '#f0f0f0',  // Optional: background color for empty space
    borderWidth: 2, // Stroke width for the grid item
    borderColor: '#FF9933', // Saffron color for the stroke
  },
  ImageComponent: {
    width: '100%',
    height: '100%',
    borderRadius: 60,  // Matches gridItem for a circular image
    resizeMode: 'cover',  // Ensure image covers the area properly
  },
  tickMark: {
    fontSize: 16,
    color: '#4caf50', // Green color for tick marks
    marginBottom: 5,  // Space between items
  },
  readMore: {
    color: '#007BFF',
    fontSize: 14,
  },
  offeringsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  offering: {
    width: '45%',
    alignItems: 'center',
  },
  offeringIcon: {
    width: 50,
    height: 50,
    marginBottom: 5,
  },
  offeringText: {
    fontSize: 12,
    color: '#333',
    textAlign: 'center',
  },
  iconsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    backgroundColor: '#eef7fe',
  },
  sectionText: {
    fontSize: 16,
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    borderRadius: 5, // Rounded corners
    borderWidth: 1, // Optional: Add border width
    borderColor: '#ccc', // Optional: Border color
    shadowColor: '#000', // Shadow color
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2, // Shadow opacity
    shadowRadius: 3, // Shadow blur radius
    elevation: 2, // For Android shadow
  },
  sectionSubtitle: {
    fontSize: 16,
    marginBottom: 10,
  },
  bannerImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover', // Changed to 'cover' for better fit
    marginBottom: 15,
    borderRadius: 10, // Rounded corners
    borderWidth: 1, // Optional: Adding a border
    borderColor: '#ddd', // Subtle border color
    shadowColor: '#000', // Shadow color
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2, // Transparency of the shadow
    shadowRadius: 5, // Blur radius for shadow
    elevation: 3, // Shadow for Android
    overflow: 'hidden', // Ensures the content stays within the border radius
  },
  button: {
    backgroundColor: '#ffcc00',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  product: {
    width: '48%',
    alignItems: 'center',
  },
  productText: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  experienceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  experienceImage: {
    width: '48%',
    height: 150,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  reviewButton: {
    backgroundColor: '#00aced',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  reviewButtonText: {
    color: 'white',
    fontSize: 16,
  },
  videoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  videoImage: {
    width: '48%',
    height: 150,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  chatButtonText: {
    color: 'white',
    fontSize: 16,
  },
  offerSection: {
    backgroundColor: '#f7faff',
    padding: 10,
    borderRadius: 8,
    marginBottom: 16,
  },
  specialOffer: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  offerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  offerLeft: {
    flexDirection: 'column',
  },
  discount: {
    fontSize: 20,
    color: '#ff0000',
    fontWeight: 'bold',
  },
  offerPrice: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  mrp: {
    fontSize: 12,
    color: '#666',
    textDecorationLine: 'line-through',
  },
  inclusive: {
    fontSize: 12,
    color: '#666',
  },
});

export default ProductPage;