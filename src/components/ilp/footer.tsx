import React from 'react';
import { Image } from 'react-native';
import { Tabs } from 'expo-router';

// Import icons from assets (Make sure these paths are correct)
const homeIcon = require("@assets/icon-home-dark.png");
const gamesIcon = require("@assets/icon-games.png");
const isplIcon = require("@assets/icon-ISPL.png");
const clubsIcon = require("@assets/icon-club.png");

function Footer() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      }}
    >
      {/* Home Tab */}
      <Tabs.Screen
        name="homeScreen/index"
        options={{
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
  );
}

export default Footer;
