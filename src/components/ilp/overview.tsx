import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface OverviewProps {
    content: string;
  }

const ExpandableText: React.FC<OverviewProps> = ({ content }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <View style={styles.textContainer}>
      <Text style={styles.descriptionText}>
        {isExpanded ? content : `${content.substring(0, 100)}...`}
      </Text>
      <TouchableOpacity onPress={toggleReadMore}>
        <Text style={styles.readMoreText}>
          {isExpanded ? "Read less" : "Read more"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  textContainer: {
    marginVertical: 10,
  },
  descriptionText: {
    fontSize: 16,
    color: '#333',
  },
  readMoreText: {
    color: '#007BFF', // Change to your preferred color
    marginTop: 5,
  },
});

export default ExpandableText;
