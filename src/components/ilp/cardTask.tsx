import React from 'react';
import { TouchableOpacity, Text, ImageBackground, StyleSheet, View } from 'react-native';
import { ScaleAndOpacity } from 'react-native-motion';
import { useRouter } from 'expo-router';  // Use useRouter hook

// Define the shape of the data being passed to the card
type CardItem = {
  title: string;
  image: any; // This can now handle local images as well
};

type Props = {
  isHidden: boolean;
  item: CardItem;  // Use CardItem as type
  animateOnDidMount?: boolean;
  onPress?: (arg0: CardItem, arg1: boolean) => void;
};

const Card = (props: Props) => {
  const router = useRouter();  // Get router instance using useRouter hook

  const onPressed = (event: any) => {
    const { onPress, item } = props;

    // If there's an onPress function defined, trigger it
    if (onPress) {
      onPress(item, event?.nativeEvent);
    }

    // Navigate to the task dashboard when the card is pressed
    router.push('/taskDashboard');
  };

  const { item, isHidden, animateOnDidMount } = props;
  return (
    <ScaleAndOpacity isHidden={isHidden} animateOnDidMount={animateOnDidMount}>
      <TouchableOpacity
        onPress={onPressed}
        disabled={!props.onPress}
        style={!props.onPress ? { opacity: 0.5 } : {}}
      >
        <ImageBackground
          source={item.image}  // Use local asset directly from item.image
          style={styles.container}
          imageStyle={styles.image}
        >
          {/* Add a view to position the text properly on top of the image */}
          <View style={styles.textContainer}>
            <Text style={styles.title}>{item.title}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </ScaleAndOpacity>
  );
};

// Styles updated for a modern, production-ready look
const styles = StyleSheet.create({
  container: {
    height: 220,  // Slightly taller for better layout
    marginHorizontal: 15,
    marginVertical: 10,
    borderRadius: 12,  // Smoother rounded corners
    overflow: 'hidden',  // Ensures the image and text are clipped within rounded corners
    shadowColor: '#000',  // Shadow for iOS
    shadowOffset: { width: 0, height: 4 },  // Shadow offset
    shadowOpacity: 0.2,  // Lighter shadow for better visual depth
    shadowRadius: 6,  // Slightly wider shadow radius
    elevation: 5,  // Shadow for Android
  },
  image: {
    borderRadius: 12,  // Matches the outer container's radius
  },
  textContainer: {
    position: 'absolute',
    bottom: 10,  // Positions the text near the bottom of the image
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 165, 207, 0.75)',  // Stronger opacity for text visibility
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  title: {
    fontSize: 18,
    fontFamily: "Mulish-Bold",
    color: 'white',
    textAlign: 'center',
    letterSpacing: 1.1,  // Slight letter spacing for cleaner look
    shadowColor: '#000',  // Text shadow for contrast
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
  },
});

export default Card;
