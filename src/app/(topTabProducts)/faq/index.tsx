import React, { useState } from "react";
import { SafeAreaView, View, ScrollView, Image, Text, TouchableOpacity, StyleSheet, ImageBackground } from "react-native";
import { useRouter } from 'expo-router';
import { LinearGradient } from "expo-linear-gradient";
import Header from "@components/ilp/headerHomepage";
import { Tabs , Stack, router} from 'expo-router';



const App = () => {
  const [expanded, setExpanded] = useState(Array(faqData.length).fill(false));

  const toggleExpand = (index) => {
    let newExpanded = [...expanded];
    newExpanded[index] = !newExpanded[index];  // Toggle the selected FAQ's expansion state
    setExpanded(newExpanded);
  };

  return (
	<LinearGradient
      style={styles.page}
      locations={[0.5, 1]}
      colors={["rgba(0, 246, 255, 0.2)", "rgba(0, 148, 153, 0.2)"]}
    >

    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView style={styles.scrollView}>
        <ImageBackground source={require('@assets/faq-mini.png')} resizeMode="stretch" style={styles.imageBackground}>
          <View style={styles.imageContent} />
        </ImageBackground>

        <Text style={styles.sectionTitle}>Frequently Asked Questions</Text>
        <View style={styles.sectionDivider} />

        {faqData.map((item, index) => (
          <View key={index}>
            <TouchableOpacity onPress={() => toggleExpand(index)} style={styles.faqRow}>
              <Text style={styles.faqQuestion}>{item.question}</Text>
              <Image
                source={expanded[index] ? require('@assets/icon-up.png') : require('@assets/icon-down2.png')}
                resizeMode="stretch"
                style={styles.icon}
              />
            </TouchableOpacity>
            {expanded[index] && item.answer && (
              <Text style={styles.faqAnswer}>{item.answer}</Text>
            )}
            <View style={styles.sectionDivider} />
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
	</LinearGradient>
  );
};

const faqData = [
	{
	  question: "What are the key features of the military jeep?",
	  answer: "Our military jeep comes equipped with advanced off-road capabilities, a reinforced body for durability, and cutting-edge safety features suitable for rugged terrains."
	},
	{
	  question: "Can I customize the military jeep to my needs?",
	  answer: "Yes, we offer various customization options, including additional armor, off-road tires, and enhanced suspension systems to meet specific needs."
	},
	{
	  question: "What is the delivery time for the military jeep?",
	  answer: "The delivery time is typically between 4 to 6 weeks, depending on the customization options chosen and your location."
	},
	{
	  question: "Do you offer financing options?",
	  answer: "Yes, we offer flexible financing plans for qualified buyers. You can apply for financing during the checkout process."
	},
	{
	  question: "What is the warranty on the military jeep?",
	  answer: "The military jeep comes with a standard 3-year/36,000-mile warranty, covering all major components. Extended warranties are also available."
	},
	{
	  question: "How do I schedule maintenance or repair for my jeep?",
	  answer: "You can schedule maintenance or repair services directly through our app or by contacting our customer support team."
	},
	{
	  question: "Is international shipping available for the military jeep?",
	  answer: "Yes, we ship internationally. However, additional shipping charges and delivery times may apply depending on the destination."
	},
  ];
  

const styles = StyleSheet.create({
	headerTitleContainer: {
		alignItems: 'center',
	  },
	  headerTitle: {
		fontWeight: '600',
		fontSize: 18,
	  },
	  headerSubtitle: {
		fontWeight: 'bold',
		fontSize: 22,
	  },
	  headerRight: {
		paddingRight: 10,
	  },
	page: {
		flex: 1,
		width: "100%",
		height: "100%",
		backgroundColor: "transparent",
	  },
	safeAreaView: {
	  flex: 1,
	  backgroundColor: "#FFFFFF",
	},
	scrollView: {
	  flex: 1,
	},
	imageBackground: {
	  height: 257,
	  paddingHorizontal: 58,
	  marginBottom: 36,
	  marginHorizontal: 8,
	},
	imageContent: {
	  height: 256,
	},
	sectionTitle: {
	  color: "#000000",
	  fontSize: 24,
	  marginBottom: 23,
	  marginLeft: 10,
	},
	sectionDivider: {
	  height: 3,
	  backgroundColor: "#D7DDF0",
	  marginBottom: 22,
	  marginHorizontal: 8,
	},
	faqRow: {
	  flexDirection: "row",
	  justifyContent: "space-between",
	  alignItems: "center",
	  marginBottom: 23,
	  marginHorizontal: 24,
	  paddingVertical: 10, // Added padding to make the touch area a bit larger
	},
	faqQuestion: {
	  flex: 1, // Ensures the question text takes up the available space
	  color: "#000000",
	  fontSize: 18,
	  paddingRight: 10, // Adds space between the question and the icon
	},
	faqAnswer: {
	  color: "#3C3C43",
	  fontSize: 16,
	  marginBottom: 20,
	  marginHorizontal: 25,
	  width: 310,
	},
	icon: {
	  width: 24,
	  height: 24,
	  marginLeft: 10, // Ensures the icon is aligned with consistent padding
	},
  });

export default App;
