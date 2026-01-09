import React, { useState, useRef } from "react";
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
import {
  widthPercentageToDP as W,
  heightPercentageToDP as H,
} from "react-native-responsive-screen";

const Addpin = () => {
  const [focusedIndex, setFocusedIndex] = useState(null);
  const [pin, setPin] = useState(["", "", "", ""]);

  const inputsRef = useRef([]);

  const handleChange = (value, index) => {
    if (!/^\d*$/.test(value)) return;

    const updatedPin = [...pin];
    const previousValue = updatedPin[index];

    updatedPin[index] = value;
    setPin(updatedPin);

    // ▶ Move to next input
    if (value && !previousValue && index < 3) {
      setTimeout(() => {
        inputsRef.current[index + 1]?.focus();
      }, 40);
    }

    // ◀ Smooth backspace to previous
    if (!value && previousValue && index > 0) {
      setTimeout(() => {
        inputsRef.current[index - 1]?.focus();
      }, 40);
    }
  };

  const handleSubmit = () => {
    if (pin.some(d => d === "")) {
      Alert.alert("Error", "Please enter complete 4-digit PIN");
      return;
    }

    const finalPin = pin.join("");
    console.log("PIN:", finalPin);
    Alert.alert("Success", "PIN added successfully");
  };

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <StatusBar hidden />

      {/* Header Image */}
      <View style={{ opacity: 0.1, alignSelf: "flex-end", margin: 10 }}>
        <Image
          source={require("../assets/k.png")}
          style={{ height: H(15), width: W(19) }}
        />
      </View>

      {/* Title */}
      <Text style={{ marginLeft: 25, fontSize: H(4), fontWeight: "700" }}>
        Welcome back!
      </Text>

      <Text
        style={{
          opacity: 0.5,
          fontSize: 13,
          marginLeft: 25,
          marginTop: 10,
        }}
      >
        Enter your security PIN to continue
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
            ref={(ref) => (inputsRef.current[index] = ref)}
            value={digit}
            onChangeText={(value) => handleChange(value, index)}
            keyboardType="number-pad"
            secureTextEntry
            maxLength={1}
            style={[
              styles.input,
              {
                borderColor:
                  focusedIndex === index
                    ? "rgba(254, 192, 15, 1)"
                    : "rgba(200,200,200,1)",
              },
            ]}
            onFocus={() => setFocusedIndex(index)}
            onBlur={() => setFocusedIndex(null)}
          />
        ))}
      </View>

      {/* Submit Button */}
      <TouchableOpacity onPress={handleSubmit} style={styles.button}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>

      <View style={{ height: 40 }} />
    </ScrollView>
  );
};

export default Addpin;

/* ---------- STYLES ---------- */

const styles = {
  input: {
    backgroundColor: "rgba(248,248,248,1)",
    height: H(7),
    width: W(14),
    borderRadius: 10,
    borderWidth: 1,

    // 🔐 Secure dot styling
    fontSize: H(3.5),   // bigger dots
    fontWeight: "700",  // darker dots
    color: "#000",
    textAlign: "center",
  },
  button: {
    backgroundColor: "rgba(254, 200, 45, 1)",
    height: H(6.5),
    width: W(70),
    borderRadius: 25,
    alignSelf: "center",
    marginTop: H(10),
    justifyContent: "center",
  },
  buttonText: {
    fontWeight: "600",
    fontSize: H(2.5),
    textAlign: "center",
  },
};
