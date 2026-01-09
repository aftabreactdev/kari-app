import React, { useState } from "react";
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

const AddAddress = ({ navigation }) => {
  const [focused, setFocused] = useState(false);
  const [address, setAddress] = useState("");

  /* ---------------- VALIDATION ---------------- */
  const handleContinue = () => {
    if (!address.trim()) {
      Alert.alert("Error", "Address is required");
      return;
    }

    if (address.trim().length < 10) {
      Alert.alert(
        "Invalid Address",
        "Please enter a complete address"
      );
      return;
    }

    console.log("Saved Address:", address);
    Alert.alert("Success", "Address saved successfully");
    // navigation.navigate("NextScreen");
  };

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <StatusBar hidden />

      {/* Top Image */}
      <View style={{ opacity: 0.1, alignSelf: "flex-end", margin: 10 }}>
        <Image
          source={require("../assets/k.png")}
          style={{ height: H(20), width: W(25) }}
        />
      </View>

      {/* Title */}
      <Text style={styles.title}>Add</Text>
      <Text style={styles.title}>Address</Text>

      {/* Description */}
      <Text style={styles.description}>
        Tortor nunc neque, sagittis at fermentum est, sit et quisque ut a
        lobortis.
      </Text>

      {/* Address Input */}
      <View style={{ marginTop: 25, marginHorizontal: 25 }}>
        <Text style={styles.label}>Address</Text>
        <TextInput
          value={address}
          onChangeText={setAddress}
          placeholder="1901 Thornridge Cir. Shiloh, Hawaii 81063"
          style={[
            styles.input,
            {
              borderColor: focused
                ? "rgba(254, 192, 15, 1)"
                : "rgba(200,200,200,1)",
            },
          ]}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
      </View>

      {/* Locate Me */}
      <TouchableOpacity
        onPress={() =>
          Alert.alert("Info", "Location feature coming soon")
        }
        style={{ marginTop: 15, marginLeft: 25 }}
      >
        <Text style={styles.locateText}>Locate Me</Text>
      </TouchableOpacity>

      {/* Continue Button */}
      <TouchableOpacity
        onPress={handleContinue}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>

      <View style={{ height: 50 }} />
    </ScrollView>
  );
};

export default AddAddress;

/* ---------------- STYLES ---------------- */

const styles = {
  title: {
    marginLeft: 25,
    fontWeight: "700",
    fontSize: H(4),
  },
  description: {
    opacity: 0.5,
    fontSize: 13,
    marginLeft: 25,
    marginTop: 10,
    lineHeight: 18,
  },
  label: {
    color: "rgba(151,150,161,1)",
    fontSize: H(2),
    marginBottom: 5,
    fontWeight: "600",
  },
  input: {
    backgroundColor: "rgba(248,248,248,1)",
    height: H(7.5),
    borderRadius: 10,
    borderWidth: 1.5,
    paddingHorizontal: 15, // 👈 placeholder slightly left
    fontSize: H(2),
  },
  locateText: {
    fontSize: H(2),
    color: "rgba(254, 200, 45, 1)",
    textDecorationLine: "underline",
  },
  button: {
    backgroundColor: "rgba(254, 200, 45, 1)",
    height: H(6.5),
    width: W(70),
    borderRadius: 25,
    alignSelf: "center",
    marginTop: H(12),
    justifyContent: "center",
  },
  buttonText: {
    fontWeight: "600",
    fontSize: H(2.5),
    textAlign: "center",
  },
};
