import React, { useRef, useState } from "react";
import {
  View,
  Image,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { widthPercentageToDP as W, heightPercentageToDP as H } from "react-native-responsive-screen";
import Ionicons from "react-native-vector-icons/Ionicons";

const VerificationCode = ({ navigation }) => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [focusedIndex, setFocusedIndex] = useState(null); // Track focused input
  const inputs = useRef([]);

  const handleChange = (value, index) => {
    if (!/^\d?$/.test(value)) return; // allow only numbers

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 3) {
      inputs.current[index + 1].focus();
    }
  };

  const handleBackspace = (value, index) => {
    if (!value && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  const handleVerify = () => {
    const code = otp.join("");
    if (code.length < 4) {
      Alert.alert("Error", "Please enter the 4-digit verification code");
      return;
    }
    console.log("OTP Verified:", code);
    // navigation.navigate("AccountVerified");
  };

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <StatusBar hidden />

      {/* Back Button */}
      <View style={{ flexDirection: "row", padding: 12 }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={26} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Top Image */}
      <View style={{ opacity: 0.1, alignSelf: "flex-end", margin: 10 }}>
        <Image
          source={require("../assets/k.png")}
          style={{ height: H(20), width: W(25) }}
        />
      </View>

      {/* Title */}
      <Text style={{ marginLeft: 25, fontWeight: "700", fontSize: H(4) }}>
        Verification Code
      </Text>

      <Text style={{ opacity: 0.5, fontSize: 13, marginTop: 10, marginLeft: 25 }}>
        Please type the verification code sent to{"\n"}08062112993
      </Text>

      {/* OTP Inputs */}
      <View
        style={{
          marginTop: 30,
          marginHorizontal: 25,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={(ref) => (inputs.current[index] = ref)}
            value={digit}
            onChangeText={(value) => handleChange(value, index)}
            onKeyPress={({ nativeEvent }) => {
              if (nativeEvent.key === "Backspace") handleBackspace(digit, index);
            }}
            onFocus={() => setFocusedIndex(index)}
            onBlur={() => setFocusedIndex(null)}
            style={{
              ...inputStyle,
              borderColor: focusedIndex === index ? "rgba(254, 200, 45, 1)" : "gray", // yellow when focused
            }}
            keyboardType="number-pad"
            maxLength={1}
          />
        ))}
      </View>

      {/* Resend */}
      <View style={{ flexDirection: "row", alignSelf: "center", marginTop: 20 }}>
        <Text style={{ fontSize: H(2) }}>I didn't receive a code!</Text>
        <TouchableOpacity onPress={() => console.log("Resend OTP")}>
          <Text
            style={{
              marginLeft: 5,
              fontSize: H(2),
              color: "rgba(254, 200, 45, 1)",
            }}
          >
            Please resend
          </Text>
        </TouchableOpacity>
      </View>

      {/* Verify Button */}
      <TouchableOpacity
        onPress={handleVerify}
        style={{
          backgroundColor: "rgba(254, 200, 45, 1)",
          height: H(6.5),
          width: W(70),
          borderRadius: 25,
          alignSelf: "center",
          marginTop: 30,
          justifyContent: "center",
        }}
      >
        <Text style={{ fontWeight: "600", fontSize: H(2.5), textAlign: "center" }}>
          Verify
        </Text>
      </TouchableOpacity>

      <View style={{ height: 50 }} />
    </ScrollView>
  );
};

export default VerificationCode;

/* ---------- STYLES ---------- */
const inputStyle = {
  backgroundColor: "rgba(248,248,248,1)",
  height: H(7.5),
  width: W(15),
  borderRadius: 10,
  borderWidth: 1.5,
  textAlign: "center",
  fontSize: H(2.5),
  borderColor: "gray", // default border color
};
