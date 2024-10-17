import * as React from "react";
import { Text, StyleSheet, View, Pressable, TextInput, Alert } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter, Stack } from "expo-router";
import { FontFamily, FontSize, Color, Border, Padding } from "../../../../GlobalStyles";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Otp = () => {
  const router = useRouter();
  const [otp, setOtp] = React.useState<string[]>(["", "", "", "", "", ""]);
  const otpInputs = React.useRef<TextInput[]>([]);
  const [phoneNumber, setPhoneNumber] = React.useState<string>("");

  // Fetch the phone number from AsyncStorage
  React.useEffect(() => {
    const fetchPhoneNumber = async () => {
      try {
        const storedPhoneNumber = await AsyncStorage.getItem('phoneNumber');
        if (storedPhoneNumber) {
          setPhoneNumber(storedPhoneNumber);
        }
      } catch (error) {
        console.error("Failed to fetch phone number:", error);
      }
    };
    
    fetchPhoneNumber();
  }, []);

  // Handle OTP input changes and auto-focus the next input
  const handleOtpChange = (text: string, index: number) => {
    const newOtp = [...otp];
    if (/^[0-9]$/.test(text) || text === "") { // Allow only numeric input
      newOtp[index] = text;
      setOtp(newOtp);
      if (text && index < otp.length - 1) {
        otpInputs.current[index + 1]?.focus(); // Move to the next input
      }
    } else {
      Alert.alert("Invalid Input", "Please enter only numeric values.");
    }
  };

  // Handle Backspace to go to the previous input
  const handleKeyPress = (event: any, index: number) => {
    if (event.nativeEvent.key === "Backspace" && otp[index] === "") {
      if (index > 0) {
        otpInputs.current[index - 1]?.focus(); // Move to the previous input
      }
    }
  };

  // Check if the OTP is complete
  const isOtpComplete = otp.every((digit) => digit !== "");

  // Handle OTP verification
  const handleVerify = async () => {
    const otpString = otp.join(""); // Combine OTP array into string
    if (!isOtpComplete) {
      Alert.alert("Incomplete OTP", "Please enter the full 6-digit OTP.");
      return;
    }
    
    try {
      const response = await fetch("https://ilearnpoint.com/ilpapi/otp/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contact: phoneNumber,
          otp: otpString,
        }),
      });

      const data = await response.json();

      if (data.success) {
        // Save token in AsyncStorage
        await AsyncStorage.setItem('authToken', data.token);
        // Navigate to the next screen or perform any further actions
        router.push("/loginSuccessfull");
      } else {
        Alert.alert("Verification Failed", "Invalid OTP. Please try again.");
        setOtp(["", "", "", "", "", ""]); // Clear the OTP array
        otpInputs.current[0]?.focus(); // Focus the first input for user to retry
      }
    } catch (error) {
      Alert.alert("Error", "An error occurred during verification. Please try again.");
    }
  };

  // Handle Resend OTP
  const handleResend = async () => {
    try {
      // Sending POST request to the OTP API
      const response = await fetch("https://ilearnpoint.com/ilpapi/otp/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ contact: phoneNumber }),
      });
  
      const data = await response.json();
  
      if (data.success) {
        // Notify user that OTP has been resent
        console.log(data.otp);
        Alert.alert("OTP Resent", "A new OTP has been sent to your phone.");
        // Reset the OTP inputs
        setOtp(["", "", "", "", "", ""]);
        otpInputs.current[0]?.focus(); // Focus the first input for user to enter the new OTP
      } else {
        Alert.alert("Error", "Failed to generate OTP. Please try again.");
      }
    } catch (error) {
      Alert.alert("Error", "An error occurred while generating OTP. Please try again.");
    }
  };

  return (
    <LinearGradient
      style={styles.otp}
      locations={[0.5, 1]}
      colors={["rgba(0, 246, 255, 0.2)", "rgba(0, 148, 153, 0.2)"]}
    >
      <Stack.Screen options={{ title: 'OTP Verification' }} />
      <View style={styles.container}>
        <Text style={[styles.enter6Digit, styles.resendCodeTypo]}>
          Enter 6 digit verification code sent to your phone number
        </Text>

        <View style={styles.otpInputContainer}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              ref={(ref) => (otpInputs.current[index] = ref!)} // Assign ref for focusing
              style={styles.otpInputBox}
              value={digit}
              onChangeText={(text) => handleOtpChange(text, index)}
              onKeyPress={(e) => handleKeyPress(e, index)}
              keyboardType="number-pad"
              maxLength={1}
              textAlign="center"
            />
          ))}
        </View>

        <Pressable
          style={[styles.button, styles.buttonFlexBox, !isOtpComplete && styles.buttonDisabled]}
          onPress={handleVerify}
          disabled={!isOtpComplete}
        >
          <Text style={styles.label}>Verify</Text>
        </Pressable>

        <Pressable onPress={handleResend}>
          <Text style={[styles.resendCode, styles.resendCodeTypo]}>
            Resend Code
          </Text>
        </Pressable>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  resendCodeTypo: {
    fontFamily: FontFamily.plusJakartaSansSemiBold,
    fontWeight: "600",
    textAlign: "center",
  },
  enter6Digit: {
    fontSize: FontSize.size_xl,
    lineHeight: 32,
    color: Color.blue100,
    marginBottom: 20,
    textAlign: "center",
    width: 326,
  },
  otpInputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 40,
    width: "80%",
  },
  otpInputBox: {
    borderRadius: Border.br_5xs,
    borderWidth: 1.5,
    borderColor: Color.white50,
    width: 48,
    height: 48,
    fontSize: FontSize.oldPrice_size,
    fontFamily: FontFamily.plusJakartaSansMedium,
    color: Color.blue100,
    backgroundColor: Color.white200,
    textAlign: "center",
  },
  resendCode: {
    fontSize: FontSize.materialThemeLabelLarge_size,
    lineHeight: 28,
    color: Color.red100,
    marginTop: 20,
    textAlign: "center",
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
    borderRadius: Border.br_xs,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_xs,
    width: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonDisabled: {
    backgroundColor: Color.gray100,
  },
  buttonFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  otp: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "transparent",
  },
});

export default Otp;
