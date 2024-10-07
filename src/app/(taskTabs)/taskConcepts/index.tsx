import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { CollapseableCard } from '@components/ilp/CollapsableCard'; // Assuming Card component is in the same directory

export default function ConceptsScreen() {
  // Sample data for STEM concepts
  const concepts = [
    {
      title: 'Science',
      subtitle: 'Physics, Electricity',
      image: require('@assets/concepts-science.png'),
      details: 'Working of LED, Resistance, Current, Voltage',
    },
    {
      title: 'Technology',
      subtitle: 'Circuitry',
      image: require('@assets/concepts-technology.png'),
      details: 'Circuit Connection and flow of current in a circuit.',
    },
    {
      title: 'Engineering',
      subtitle: 'Design',
      image: require('@assets/concepts-engineering.png'),
      details: 'SPST switch and LED configuration, and its applications.',
    },
    {
      title: 'Maths',
      subtitle: 'Geometry',
      image: require('@assets/concepts-maths.png'),
      details: 'Applications of Geometry in real-world engineering.',
    },
    {
        title: 'Key Skills',
        subtitle: 'Concepts covered in this Task',
        image: require('@assets/concepts-keyskills.png'),
        details: 'Circuit connection, Problem Solving, Series and Parallel Connection,  Switch case Control, Battery and LED Connection, Wiring, Circuit making.',
      },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>STEM Concepts</Text>
      {concepts.map((concept, index) => (
        <CollapseableCard key={index} item={concept} />
      ))}
      <View style={styles.bottomSpacer} /> 
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    paddingBottom: 32, // Extra space at the bottom of the scroll view
    backgroundColor: '#f0f8ff',
  },
  title: {
    fontSize: 26, // Increased font size for better visibility
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
    textAlign: 'center', // Centered title for a better layout
  },
  bottomSpacer: {
    height: 16, // Spacer to ensure padding at the bottom
  },
});
