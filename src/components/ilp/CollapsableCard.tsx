import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { CollapsableContainer } from "@components/ilp/CollapsableContainer"; // Import collapsable container

type CardItem = {
  title: string;
  subtitle: string;
  image: string;
  details: string;
};

// Card component definition
export const CollapseableCard = ({ item }: { item: CardItem }) => {
  const [expanded, setExpanded] = useState(false);

  const onCardPress = () => {
    setExpanded(!expanded);
  };

  return (
    <View style={styles.cardContainer}>
      <TouchableOpacity onPress={onCardPress} style={styles.cardHeader} activeOpacity={0.7}>
        <Image source={ item.image } style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.subtitle}>{item.subtitle}</Text>
        </View>
      </TouchableOpacity>

      {/* Collapsible content */}
      <CollapsableContainer expanded={expanded}>
        <Text style={styles.details}>{item.details}</Text>
      </CollapsableContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginVertical: 10,
    marginHorizontal: 15,
    borderRadius: 12,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5, // For Android
    overflow: 'hidden', // Ensures child elements are clipped within the rounded corners
  },
  cardHeader: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: '#f9f9f9', // Slightly different background for the header
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  textContainer: {
    justifyContent: 'center',
    flex: 1, // Makes sure text container uses available space
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 3,
  },
  details: {
    padding: 15,
    fontSize: 16,
    color: '#444',
    backgroundColor: '#f8f8f8',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
});
