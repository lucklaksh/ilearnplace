import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput, Pressable, Alert } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  FontFamily,
  Border,
  Padding,
  Color,
  FontSize,
  Gap,
} from "../../../GlobalStyles";

const Login = () => {
  const [frameDropdownOpen, setFrameDropdownOpen] = useState(false);
  const [frameDropdownValue, setFrameDropdownValue] = useState<string | null>("+91");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const router = useRouter();

  const isValidPhoneNumber = (number: string) => {
    return /^[0-9]{10,12}$/.test(number);
  };

  const handleSubmit = async () => {
    if (frameDropdownValue && phoneNumber && isValidPhoneNumber(phoneNumber)) {
      try {
        // Sending POST request to the OTP API
        const response = await fetch("http://65.0.178.227:8000/ilpapi/otp/generate", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ contact: phoneNumber }), // Sending the phone number in the request body
        });
  
        // Parse the JSON response
        const data = await response.json();
  
        if (data.success) {
          // If OTP generation is successful, navigate to the OTP screen
          await AsyncStorage.setItem('phoneNumber', phoneNumber);
          console.log(data.otp);
          router.push("/otp");
        } else {
          // Handle failure case
          Alert.alert("Error", "Failed to generate OTP. Please try again.");
        }
      } catch (error) {
        // Handle any network or other errors
        Alert.alert("Error", "An error occurred while generating OTP. Please try again.");
      }
    } else {
      Alert.alert(
        "Invalid Input",
        "Please select a country code and enter a valid phone number."
      );
    }
  };

  return (
    <View style={styles.loginToYourAccountParent}>
      <Text style={[styles.loginToYour, styles.loginToYourTypo]}>
        Login to Your Account
      </Text>

      <View style={[styles.phoneNumberWrapper, styles.frameChildFlexBox]}>
        <Text style={[styles.phoneNumber, styles.loginToYourTypo]}>
          Phone Number
        </Text>
      </View>

      <View style={styles.frameParent}>
        <View style={[styles.dropdownContainer, styles.buttonFlexBox]}>
          <DropDownPicker
            style={[styles.dropdown, styles.frameChildBorder]}
            open={frameDropdownOpen}
            setOpen={setFrameDropdownOpen}
            value={frameDropdownValue}
            setValue={setFrameDropdownValue}
            placeholder="+91"
            items={[
              { label: "+62", value: "+62" },
              { label: "+91", value: "+91" },
              { label: "+1", value: "+1" },
            ]}
            labelStyle={styles.frameDropdownValue}
            dropDownContainerStyle={styles.frameDropdowndropDownContainer}
          />
        </View>

        <TextInput
          style={[styles.inputField, styles.frameChildBorder]}
          placeholder="81313782626"
          placeholderTextColor="rgba(71, 103, 149, 0.5)"
          value={phoneNumber}
          keyboardType="numeric"
          maxLength={12}
          onChangeText={setPhoneNumber}
          accessibilityLabel="Phone number input"
        />
      </View>

      <Pressable
        style={[styles.button, styles.buttonFlexBox]}
        onPress={handleSubmit}
      >
        <Text style={styles.label}>Send OTP</Text>
      </Pressable>

      {/* <View style={styles.dontHaveAccountParent}>
        <Text style={[styles.dontHaveAccount, styles.accountTypo]}>
          Don’t have an account?
        </Text>
        <Pressable>
          <Text style={[styles.createAccount, styles.accountTypo]}>
            Create Account
          </Text>
        </Pressable>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  frameDropdownValue: {
    color: "rgba(71, 103, 149, 0.5)",
    fontSize: 18,
    fontWeight: "500",
    fontFamily: "PlusJakartaSans-Medium",
  },
  frameDropdowndropDownContainer: {
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 1.2,
  },
  loginToYourTypo: {
    fontFamily: FontFamily.plusJakartaSansSemiBold,
    fontWeight: "600",
    textAlign: "center",
  },
  frameChildFlexBox: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  buttonFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  frameChildBorder: {
    borderWidth: 1.2,
    borderColor: Color.white200,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
  },
  accountTypo: {
    fontSize: FontSize.spanBold_size,
    textAlign: "center",
    fontFamily: FontFamily.plusJakartaSansSemiBold,
    fontWeight: "600",
  },
  loginToYour: {
    fontSize: FontSize.size_xl,
    lineHeight: 32,
    textAlign: "center",
    color: Color.blue100,
    alignSelf: "stretch",
  },
  phoneNumber: {
    fontSize: FontSize.materialThemeLabelLarge_size,
    lineHeight: 20,
    color: Color.colorDarkslategray_100,
    textAlign: "center",
  },
  phoneNumberWrapper: {
    justifyContent: "center",
    borderRadius: Border.br_5xs,
    paddingHorizontal: Padding.p_base,
    flex: 1,
    backgroundColor: Color.white200,
  },
  dropdownContainer: {
    flex: 0.4,  // Adjusted to ensure it takes appropriate width
    height: 48,
  },
  dropdown: {
    paddingVertical: 0,
    borderRadius: Border.br_5xs,
  },
  inputField: {
    flex: 0.6,  // Ensure the input takes the remaining width
    height: 48,
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    fontWeight: "500",
    fontFamily: FontFamily.plusJakartaSansMedium,
    fontSize: FontSize.oldPrice_size,
    borderRadius: Border.br_5xs,
  },
  frameParent: {
    flexDirection: "row",
    alignSelf: "stretch",
    marginVertical: 16,
  },
  label: {
    fontSize: FontSize.size_base,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: FontFamily.plusJakartaSansBold,
    color: Color.blue200,
    textAlign: "center",
  },
  button: {
    backgroundColor: Color.red100,
    paddingVertical: Padding.p_xs,
    justifyContent: "center",
    borderRadius: Border.br_xs,
    alignSelf: "stretch",
  },
  dontHaveAccount: {
    color: Color.blue100,
  },
  createAccount: {
    color: Color.red200,
  },
  dontHaveAccountParent: {
    gap: Gap.gap_3xs,
    flexDirection: "row",
  },
  loginToYourAccountParent: {
    position: "absolute",
    marginLeft: -180,
    top: 287,
    left: "50%",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderRadius: Border.br_xl,
    width: 360,
    padding: Padding.p_base,
    gap: Gap.gap_3xl,
    alignItems: "center",
    backgroundColor: Color.white200,
    // paddingBottom: 20,  // Added padding at the bottom
  },
});

export default Login;
