import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { useRouter, Stack } from "expo-router";
import {
  FontSize,
  FontFamily,
  Color,
  Gap,
  Border,
  Padding,
} from "../../../../GlobalStyles";

const LoginSuccessful = () => {
  const router = useRouter();

  // Auto-redirect to Home Screen after 3 seconds
  React.useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/homeScreen");
    }, 3000);

    return () => clearTimeout(timer); // Cleanup timer if the component unmounts
  }, []);

  return (
    <View style={styles.loginSuccessful}>
      <Stack.Screen options={{ title: 'Login Successfull' }} />
      <View style={styles.contentContainer}>
        <View style={styles.description}>
          <Text style={styles.phoneNumberVerified}>Phone Number Verified</Text>
          <Text style={styles.youWillBe}>
            You will be redirected to the Home Page in a few moments
          </Text>
        </View>
        <Pressable
          style={styles.button}
          onPress={() => router.push("/homeScreen")} // Adjusted for Expo Router
        >
          <Text style={styles.label}>Welcome</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loginSuccessful: {
    flex: 1,
    backgroundColor: Color.white100,
    justifyContent: "center", // Center vertically
    alignItems: "center", // Center horizontally
  },
  contentContainer: {
    alignItems: "center", // Center content horizontally
    padding: 20,
  },
  description: {
    marginBottom: 40, // Space between description and button
    alignItems: "center",
  },
  phoneNumberVerified: {
    fontSize: FontSize.headerBold_size,
    fontWeight: "600",
    fontFamily: FontFamily.headerBold,
    color: Color.blue300,
    textAlign: "center",
    marginBottom: 20, // Space between title and description
  },
  youWillBe: {
    fontSize: FontSize.subheaderRegular_size,
    fontFamily: FontFamily.subheaderRegular,
    color: Color.black1,
    textAlign: "center",
    width: 300, // Adjust width to prevent overflow
  },
  button: {
    backgroundColor: Color.red100,
    borderRadius: Border.br_xs,
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_xs,
    width: 200, // Adjusted button width
  },
  label: {
    fontSize: FontSize.size_base,
    fontWeight: "700",
    fontFamily: FontFamily.plusJakartaSansBold,
    color: Color.blue200,
    textAlign: "center",
  },
});

export default LoginSuccessful;
