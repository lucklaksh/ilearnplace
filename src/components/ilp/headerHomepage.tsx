import React from "react";
import { View, Text, StyleSheet } from "react-native";

// Define the props for the Header component
interface HeaderProps {
  logoText: string;
}

// Create the Header component
const Header: React.FC<HeaderProps> = ({ logoText }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.logoText}>{logoText}</Text>
      {/* Removed the profile image */}
    </View>
  );
};

// Define the styles used in this component
const styles = StyleSheet.create({
  header: {
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  logoText: {
    fontSize: 20,
    color: "#FFF",
  },
});

export default Header;
