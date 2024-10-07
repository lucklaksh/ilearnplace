import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import TaskCard from '@components/ilp/cardTask';  // Renaming the import to avoid the conflict

export default function TaskScreen() {
  const tasks = [
    { title: "How To Control LED By Switch", taskNumber: "1.0", image: require('@assets/task1.jpg'), locked: false },
    { title: "How To Connect Resistance in Series and Parallel with LED", taskNumber: "2.0", image: require('@assets/task2.jpg'), locked: true },
    { title: "How To Control Motor By Switch", taskNumber: "3.0", image: require('@assets/task1.jpg'), locked: true },
    { title: "How To Connect Resistance in Series and Parallel with Motor", taskNumber: "4.0", image: require('@assets/task1.jpg'), locked: true },
    // Add more tasks here
  ];

  const handleCardPress = (item, event) => {
    console.log('Card pressed:', item.title);
  };

  return (
    <View style={styles.container}>
      {/* Horizontal Scroll for task numbers */}
      <ScrollView horizontal={true} style={styles.taskNumberScroll} showsHorizontalScrollIndicator={false}>
        {[...Array(10).keys()].map((num, index) => (
          <TouchableOpacity key={index} style={styles.taskNumber}>
            <Text style={styles.taskNumberText}>{num + 1}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Task cards */}
      <ScrollView>
        <View>
          {tasks.map((task, index) => (
            <TaskCard
              key={index}
              item={task}  // Pass the task object
              isHidden={false}
              onPress={handleCardPress}  // Handle card press
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5F6FD',
  },
  taskNumberScroll: {
    marginTop: 10,
    paddingLeft: 10,
  },
  taskNumber: {
    backgroundColor: '#ADD8E6',
    borderRadius: 20,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  taskNumberText: {
    fontSize: 18,
    color: '#fff',
  },
  bottomNav: {
    backgroundColor: '#73C2FB',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
  },
  navItem: {
    color: 'white',
    fontSize: 16,
  },
});
