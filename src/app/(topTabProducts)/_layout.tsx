import {
  MaterialTopTabNavigationEventMap,
  MaterialTopTabNavigationOptions,
  createMaterialTopTabNavigator,
} from "@react-navigation/material-top-tabs";
import { withLayoutContext, Stack } from "expo-router";
import { ParamListBase, TabNavigationState } from "@react-navigation/native";
import { View, Text, StyleSheet } from 'react-native';

const { Navigator } = createMaterialTopTabNavigator();

export const MaterialTopTabs = withLayoutContext<
  MaterialTopTabNavigationOptions,
  typeof Navigator,
  TabNavigationState<ParamListBase>,
  MaterialTopTabNavigationEventMap
>(Navigator);

export default function TabLayout() {
  return (
    <View style={styles.page}>
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: () => (
            <View style={styles.headerTitleContainer}>
              <Text style={styles.headerTitle}>Battle Field</Text>
              <Text style={styles.headerSubtitle}>Level: Military Jeep</Text>
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
        <MaterialTopTabs.Screen name="product/index" options={{ title: "Home" }} />
        <MaterialTopTabs.Screen name="taskScreen/index" options={{ title: "Tasks" }} />
        <MaterialTopTabs.Screen name="faq/index" options={{ title: "FAQ" }} />
        <MaterialTopTabs.Screen name="reviews/index" options={{ title: "Reviews" }} />
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
  },
  headerSubtitle: {
    fontWeight: 'bold',
    fontSize: 22,
  },
});
