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

import Ionicons from "react-native-vector-icons/Ionicons";

import {
  widthPercentageToDP as W,
  heightPercentageToDP as H,
} from "react-native-responsive-screen";

const Addpin = ({ navigation }) => {
  const [pin, setPin] = useState(["", "", "", ""]);
  const inputs = useRef([]);

  // Handle PIN input
  const handleChange = (value, index) => {
    if (!/^\d?$/.test(value)) return; // allow only digits

    const newPin = [...pin];
    newPin[index] = value;
    setPin(newPin);

    // Auto focus next
    if (value && index < 3) {
      inputs.current[index + 1].focus();
    }
  };

  // Handle backspace
  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === "Backspace" && !pin[index] && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  // Validation
  const handleAddPin = () => {
    const finalPin = pin.join("");

    if (finalPin.length !== 4) {
      Alert.alert("Error", "Please enter a 4-digit PIN");
      return;
    }

    Alert.alert("Success", "Security PIN added successfully");

    // navigation.navigate("ConfirmPin", { pin: finalPin });
  };

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <StatusBar hidden />

             <View
                   style={{
                     flexDirection: "row",
                     alignItems: "center",
                     paddingVertical: 12,
                     paddingHorizontal: 10,
                   }}
                 >
                   <TouchableOpacity onPress={() => navigation.goBack()} style={{
                    
                   }}>
                     <Ionicons name="chevron-back" size={26} color="#000" />
                   </TouchableOpacity>
                 </View>
            

      {/* Top Image */}
      <View style={{ opacity: 0.1, alignSelf: "flex-end", margin: 10 }}>
        <Image
          source={require("../assets/k.png")}
          style={{ height: H(20), width: W(27) }}
        />
      </View>

      {/* Title */}
      <Text
        style={{
          fontWeight: "700",
          fontSize: H(4),
          marginLeft: 25,
        }}
      >
        Security Pin
      </Text>

      <Text
        style={{
          opacity: 0.5,
          fontSize: 13,
          marginLeft: 25,
          marginTop: 10,
        }}
      >
        Set a 4 Digit Passcode for your Transactions
      </Text>

      {/* PIN Inputs */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 25,
          marginTop: H(8),
        }}
      >
        {pin.map((digit, index) => (
          <TextInput
            key={index}
            ref={(ref) => (inputs.current[index] = ref)}
            value={digit}
            onChangeText={(value) => handleChange(value, index)}
            onKeyPress={(e) => handleKeyPress(e, index)}
            style={inputStyle}
            keyboardType="number-pad"
            maxLength={1}
            secureTextEntry
          />
        ))}
      </View>

      {/* Add Button */}
      <TouchableOpacity
        onPress={handleAddPin}
        style={{
          backgroundColor: "rgba(254, 200, 45, 1)",
          height: H(6.5),
          width: W(70),
          borderRadius: 25,
          alignSelf: "center",
          marginTop: H(15),
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontWeight: "600",
            fontSize: H(2.5),
            textAlign: "center",
          }}
        >
          Add
        </Text>
      </TouchableOpacity>

      <View style={{ height: 40 }} />
    </ScrollView>
  );
};

export default Addpin;

/* ---------- STYLES ---------- */

const inputStyle = {
  backgroundColor: "rgba(248,248,248,1)",
  height: H(7.5),
  width: W(15),
  borderRadius: 10,
  borderWidth: 0.8,
  borderColor: "rgba(200,200,200,1)",
  textAlign: "center",
  fontSize: H(3),
};
