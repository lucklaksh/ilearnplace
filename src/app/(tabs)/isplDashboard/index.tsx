import React from 'react';
import { ScrollView, StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

const StemRoboticsLab = () => {

  return (
    <View style={styles.container}>

        <View style={styles.contentContainer}>
          <Text style={styles.header}>STEM & Robotics Lab</Text>
          <Text style={styles.subHeader}>Our Deliverables & Services</Text>

          <Text style={styles.sectionHeader}>iLearnPlace STEM Learning Kits</Text>
          <Text style={styles.text}>- 60+ STEM Learning Tasks</Text>
          <Text style={styles.text}>- 500+ Assignments</Text>
          <Text style={styles.text}>- 600+ STEM Concepts</Text>

          <Text style={styles.sectionHeader}>Personalized Learning</Text>
          <Text style={styles.text}>- iLearnPlace.com STEM Account</Text>
          <Text style={styles.text}>- 2+ Tasks per Week</Text>
          <Text style={styles.text}>- Access to STEM Experts</Text>
          <Text style={styles.text}>- 24x7 Support</Text>

          <Text style={styles.sectionHeader}>Additional Services</Text>
          <Text style={styles.text}>- STEM Demos in School PTM</Text>
          <Text style={styles.text}>- Teachers Training STEM (TTS)</Text>
          <Text style={styles.text}>- Inter-School STEM Competitions</Text>
          <Text style={styles.text}>- STEM Learning Hands-On Workshops by Experts</Text>
          <Text style={styles.text}>- Free Participation in ISPL – STEM Learning Premier League</Text>
        </View>


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F3057', // Darkish blue compatible with Turkish blue
  },
  contentContainer: {
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#FFF', // White text
  },
  subHeader: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
    color: '#FFF', // White text
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#FFF', // White text
  },
  text: {
    fontSize: 14,
    marginBottom: 5,
    color: '#FFF', // White text
  },
  chatButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#25D366', // WhatsApp green color
    borderRadius: 50,
    padding: 10,
    elevation: 5,
  },
  chatContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  chatText: {
    color: '#fff',
    fontSize: 16,
    marginRight: 10,
  },
  whatsappIcon: {
    width: 24,
    height: 24,
  },
});

export default StemRoboticsLab;
