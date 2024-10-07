import * as React from "react";
import { Text, StyleSheet, View, Pressable, TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter, Stack } from "expo-router";
import { FontFamily, FontSize, Color, Border, Padding } from "../../../../GlobalStyles";

const Otp = () => {
  const router = useRouter();
  const [otp, setOtp] = React.useState<string[]>(["", "", "", "", "", ""]);
  const otpInputs = React.useRef<TextInput[]>([]);

  // Handle OTP input changes and auto-focus the next input
  const handleOtpChange = (text: string, index: number) => {
    const newOtp = [...otp];
    if (/^[0-9]$/.test(text) || text === "") { // Allow only numeric input
      newOtp[index] = text;
      setOtp(newOtp);
      if (text && index < otp.length - 1) {
        otpInputs.current[index + 1]?.focus(); // Move to the next input
      }
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
              onKeyPress={(e) => handleKeyPress(e, index)} // Handle backspace navigation
              keyboardType="number-pad"
              maxLength={1}
              textAlign="center"
            />
          ))}
        </View>

        <Pressable
          style={[styles.button, styles.buttonFlexBox, !isOtpComplete && styles.buttonDisabled]}
          onPress={() => router.push("/loginSuccessfull")}
          disabled={!isOtpComplete} // Disable if OTP is incomplete
        >
          <Text style={styles.label}>Verify</Text>
        </Pressable>

        <Text style={[styles.resendCode, styles.resendCodeTypo]}>
          Resend Code
        </Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", // Center vertically
    alignItems: "center", // Center horizontally
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
    marginBottom: 20, // Space between title and OTP inputs
    textAlign: "center",
    width: 326,
  },
  otpInputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 40, // Space between OTP inputs and button
    width: "80%", // Adjust width to ensure good spacing
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
    marginTop: 20, // Space between button and Resend Code
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
    width: 200, // Adjusted button width
    justifyContent: "center",
    alignItems: "center",
  },
  buttonDisabled: {
    backgroundColor: Color.gray100, // Disable button style
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
