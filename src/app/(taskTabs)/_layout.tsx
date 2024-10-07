import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { withLayoutContext, Stack } from "expo-router";
import {
  createMaterialTopTabNavigator,
  MaterialTopTabNavigationOptions,
  MaterialTopTabNavigationEventMap
} from "@react-navigation/material-top-tabs";
import { ParamListBase, TabNavigationState } from "@react-navigation/native";

const { Navigator } = createMaterialTopTabNavigator();

export const MaterialTopTabs = withLayoutContext<
  MaterialTopTabNavigationOptions,
  typeof Navigator,
  TabNavigationState<ParamListBase>,
  MaterialTopTabNavigationEventMap
>(Navigator);

export default function TabLayout() {
  const headerTitle = "Battle Field: Military Jeep";
  const headerSubtitle = "Task: How To Control LED By Switch";

  return (
    <View style={styles.page}>
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: () => (
            <View style={styles.headerTitleContainer}>
              {/* Limit the header title to show only a certain number of characters */}
              <Text style={styles.headerTitle} numberOfLines={1} ellipsizeMode="tail">
                {headerTitle}
              </Text>
              <Text style={styles.headerSubtitle} numberOfLines={1} ellipsizeMode="tail">
                {headerSubtitle}
              </Text>
            </View>
          ),
          headerStyle: {
            backgroundColor: '#6495ED',
          },
          headerTitleAlign: 'left',
          headerTintColor: '#fff',
        }}
      />
      <MaterialTopTabs
        screenOptions={{
          tabBarStyle: {
            backgroundColor: '#6495ED', // Tab bar background color
          },
          tabBarActiveTintColor: '#fff', // Active tab color
          tabBarInactiveTintColor: '#d3d3d3', // Inactive tab color
        }}
      >
        <MaterialTopTabs.Screen name="taskVideo/index" options={{ title: "Videos" }} />
        <MaterialTopTabs.Screen name="taskNotes/index" options={{ title: "Notes" }} />
        <MaterialTopTabs.Screen name="taskConcepts/index" options={{ title: "Concepts" }} />
        <MaterialTopTabs.Screen name="taskSubmission1/index" options={{ title: "Uploads" }} />
      </MaterialTopTabs>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "transparent",
  },
  headerTitleContainer: {
    alignItems: 'flex-start',
  },
  headerTitle: {
    fontWeight: '600',
    fontSize: 18,
    maxWidth: 250, // Adjust the width according to your design needs
  },
  headerSubtitle: {
    fontWeight: 'bold',
    fontSize: 22,
    maxWidth: 250, // Adjust the width according to your design needs
  },
});
