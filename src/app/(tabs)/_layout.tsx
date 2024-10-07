import React from 'react';
import { Image } from 'react-native';
import { Tabs, Stack, router } from 'expo-router';
import { Pressable } from "react-native";
import Header from "@components/ilp/headerHomepage";

// Import icons from assets (Make sure these paths are correct)
const homeIcon = require("@assets/icon-home-dark.png");
const gamesIcon = require("@assets/icon-games.png");
const isplIcon = require("@assets/icon-ISPL.png");
const clubsIcon = require("@assets/icon-club.png");

function Footer() {
  return (
    <>
      {/* Stack.Screen to control header properties */}
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: () => (
            <Header logoText="ILearn.Place" /> // Custom text in the header
          ),
          headerRight: () => (
            <Pressable onPress={() => router.push('profileScreen')} style={{ paddingRight: 10 }}>
              <Image
                source={require("@assets/icon-profile.png")} // Profile image URL
                style={{ width: 30, height: 30, borderRadius: 15 }} // Styling the profile image
              />
            </Pressable>
          ),
          headerStyle: {
            backgroundColor: '#6495ED',
          },
          headerTitleAlign: 'center', // Center the title
          headerTintColor: '#fff', // Text color for back button and title
          headerLeft: () => null, // Disable back button globally
          headerBackVisible: false, // Make sure the back button is hidden
        }}
      />

      {/* Bottom Tabs */}
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          headerShown: false, // Ensures the top header is hidden for all tabs
        }}
      >
        {/* Home Tab */}
        <Tabs.Screen
          name="homeScreen/index"
          options={{
            headerShown: false,
            title: 'Home',
            tabBarIcon: ({ focused }) => (
              <Image
                source={homeIcon}
                style={{
                  width: 24,
                  height: 24,
                  tintColor: focused ? 'tomato' : 'gray', // Tint based on focus
                }}
              />
            ),
          }}
        />

        {/* Games Tab */}
        <Tabs.Screen
          name="ilpDashboard/index"
          options={{
            headerShown: false,
            title: 'Games',
            tabBarIcon: ({ focused }) => (
              <Image
                source={gamesIcon}
                style={{
                  width: 24,
                  height: 24,
                  tintColor: focused ? 'tomato' : 'gray',
                }}
              />
            ),
          }}
        />

        {/* ISPL Tab */}
        <Tabs.Screen
          name="isplDashboard/index"
          options={{
            headerShown: false,
            title: 'ISPL',
            tabBarIcon: ({ focused }) => (
              <Image
                source={isplIcon}
                style={{
                  width: 24,
                  height: 24,
                  tintColor: focused ? 'tomato' : 'gray',
                }}
              />
            ),
          }}
        />

        {/* Clubs Tab */}
        <Tabs.Screen
          name="clubs/index"
          options={{
            headerShown: false,
            title: 'Clubs',
            tabBarIcon: ({ focused }) => (
              <Image
                source={clubsIcon}
                style={{
                  width: 24,
                  height: 24,
                  tintColor: focused ? 'tomato' : 'gray',
                }}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
}

export default Footer;
