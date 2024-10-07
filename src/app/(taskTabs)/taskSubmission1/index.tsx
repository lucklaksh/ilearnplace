import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Button } from 'react-native';

const InstructionsScreen = () => {
  const [isExpanded, setIsExpanded] = useState(false); // State to toggle text expansion

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded); // Toggle the state
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.instructionsBox}>
          <Text style={styles.title}>Instructions for Upload</Text>
          <Text style={styles.instructions}>
            After completing the STEM & Robotics gaming task using the given hardware, students are required to create a demonstration video showcasing their work. This video will serve as a record of their performance and will be used for evaluation and feedback.
          </Text>
          {isExpanded && (
            <View style={styles.textContainer}>
              <Text style={styles.subtitle}>Review by iLearnPlace STEM Mentor:</Text>
              <Text style={styles.descriptionText}>
                Once the video is uploaded, it will be carefully reviewed by a qualified STEM mentor from iLearnPlace. This mentor will assess the student's performance, problem-solving abilities, creativity, and adherence to task guidelines. They will provide valuable feedback to help the student improve their skills and understanding of STEM and Robotics concepts.
              </Text>

              <Text style={styles.subtitle}>Student Rewards:</Text>
              <Text style={styles.descriptionText}>
                Based on the quality of the uploaded video and the mentor's evaluation, students will receive rewards. These rewards will be in the form of iLearnPlace (ILP) points. ILP points can be accumulated and later redeemed for various STEM and Robotics hardware items.
              </Text>

              <Text style={styles.subtitle}>Benefits of the Reward System:</Text>
              <Text style={styles.descriptionText}>
                The reward system serves multiple purposes. Firstly, it incentivizes students to actively participate and excel in STEM & Robotics tasks, promoting engagement and learning. Secondly, it provides tangible benefits by allowing students to earn ILP points, which can be used to acquire additional hardware items for further exploration and experimentation. This not only enhances their hands-on learning experience but also encourages continuous participation and improvement.
              </Text>

              <Text style={styles.subtitle}>Encouraging Skill Development:</Text>
              <Text style={styles.descriptionText}>
                Through this process, students are encouraged to refine their skills and knowledge in the STEM and Robotics fields. They are motivated to take on challenges, think critically, and develop practical problem-solving abilities. This not only benefits the individual students but also contributes to the overall growth and advancement of STEM education.
              </Text>

              <Text style={styles.subtitle}>In Summary:</Text>
              <Text style={styles.descriptionText}>
                The process of uploading a demonstration video after completing a STEM & Robotics gaming task with provided hardware is an integral part of the iLearnPlace program. It allows students to showcase their achievements, receive mentor feedback, and earn rewards in the form of ILP points, which can be used to acquire more STEM and Robotics hardware. This approach not only motivates students but also fosters a deeper understanding of STEM concepts and the development of essential skills.
              </Text>
            </View>
          )}
          <TouchableOpacity onPress={toggleReadMore}>
            <Text style={styles.readMoreText}>
              {isExpanded ? "Read less" : "Read more"}
            </Text>
          </TouchableOpacity>
          <Button title="Submit Assignments" onPress={() => {}} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  backgroundColor: '#e3f2fd', // Light blue background
	  padding: 16,
	},
	scrollContainer: {
	  paddingVertical: 16,
	},
	instructionsBox: {
	  backgroundColor: '#ffffff', // White background for the instructions box
	  borderRadius: 15,
	  padding: 20,
	  marginBottom: 16,
	  shadowColor: '#000',
	  shadowOffset: { width: 0, height: 2 },
	  shadowOpacity: 0.2,
	  shadowRadius: 6,
	  elevation: 5,
	  borderWidth: 1,
	  borderColor: '#e0e0e0', // Light gray border
	},
	title: {
	  fontSize: 24,
	  fontWeight: 'bold',
	  marginBottom: 12,
	  textAlign: 'center',
	  color: '#37474f', // Darker text color
	},
	instructions: {
	  fontSize: 16,
	  marginBottom: 12,
	  textAlign: 'center',
	  color: '#455a64', // Darker gray
	  lineHeight: 24, // Better readability
	},
	textContainer: {
	  marginBottom: 16,
	},
	subtitle: {
	  fontSize: 20,
	  fontWeight: 'bold',
	  marginTop: 10,
	  marginBottom: 5,
	  color: '#37474f', // Darker text color
	},
	descriptionText: {
	  fontSize: 16,
	  textAlign: 'left',
	  color: '#607d8b', // Gray color for description text
	  marginBottom: 8,
	  lineHeight: 22, // Better readability
	},
	readMoreText: {
	  fontSize: 16,
	  color: '#2196F3', // Blue color for the read more/less text
	  textDecorationLine: 'underline',
	  textAlign: 'center',
	  marginVertical: 12,
	},
  });

export default InstructionsScreen;
