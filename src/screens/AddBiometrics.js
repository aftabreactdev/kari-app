import React, { useState } from "react";
import {
  View,
  Image,
  StatusBar,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert,
  Switch,
} from "react-native";
import {
  widthPercentageToDP as W,
  heightPercentageToDP as H,
} from "react-native-responsive-screen";
import Ionicons from "react-native-vector-icons/Ionicons";
import ReactNativeBiometrics from "react-native-biometrics";

const rnBiometrics = new ReactNativeBiometrics();

const AddBiometrics = ({ navigation }) => {
  const [biometricEnabled, setBiometricEnabled] = useState(false);

  const toggleBiometric = async () => {
    if (!biometricEnabled) {
      try {
        const { available } = await rnBiometrics.isSensorAvailable();

        if (!available) {
          Alert.alert(
            "Biometric Not Available",
            "Your device does not support biometric authentication."
          );
          return;
        }

        const { success } = await rnBiometrics.simplePrompt({
          promptMessage: "Confirm Biometric",
          cancelButtonText: "Cancel",
        });

        if (success) {
          setBiometricEnabled(true);
          Alert.alert("Success", "Biometric authentication enabled");
        } else {
          Alert.alert("Cancelled", "Authentication cancelled");
        }
      } catch (error) {
        Alert.alert("Error", "Biometric authentication failed");
        console.log(error);
      }
    } else {
      // Turn OFF
      setBiometricEnabled(false);
      Alert.alert("Disabled", "Biometric authentication disabled");
    }
  };

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <StatusBar hidden />

      {/* Header */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: 12,
          paddingHorizontal: 10,
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={26} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Top Image */}
      <View style={{ opacity: 0.1, alignSelf: "flex-end", marginRight:10 }}>
        <Image
          source={require("../assets/k.png")}
          style={{ height: H(14), width: W(18) }}
        />
      </View>

      {/* Title */}
      <Text
        style={{
          marginLeft: 30,
          fontWeight: "700",
          fontSize: H(4),
        }}
      >
        Fingerprint Login
      </Text>

      {/* Subtitle */}
      <Text
        style={{
          opacity: 0.6,
          fontSize: 13,
          marginLeft: 30,
          marginTop: 10,
        }}
      >
        Secure your transactions with biometric authentication
      </Text>

      {/* Info Box with Toggle */}
      <View
        style={{
          backgroundColor: "rgba(254, 192, 15, 0.25)",
          padding: 15,
          width: W(85),
          borderRadius: H(2),
          alignSelf: "center",
          marginTop: H(8),
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            color: "rgba(140, 100, 0, 1)",
            fontWeight: "600",
            fontSize: 13,
            width: "75%",
            lineHeight: 18,
          }}
        >
          This will enable Kari app to accept your biometric login and after
          timeout.
        </Text>

        <Switch
          value={biometricEnabled}
          onValueChange={toggleBiometric}
          trackColor={{
            false: "rgba(200,200,200,1)",
            true: "rgba(254, 192, 15, 1)",
          }}
          thumbColor="#fff"
        />
      </View>

      {/* Proceed Button */}
      <TouchableOpacity
        onPress={() => {
          if (!biometricEnabled) {
            Alert.alert(
              "Biometric Disabled",
              "Please enable biometric authentication to continue"
            );
            return;
          }
          navigation.navigate("NextScreen");
        }}
        style={{
          backgroundColor: "rgba(254, 200, 45, 1)",
          height: H(6.5),
          width: W(70),
          borderRadius: 25,
          alignSelf: "center",
          marginTop: H(20),
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
          Proceed
        </Text>
      </TouchableOpacity>

      <View style={{ height: 40 }} />
    </ScrollView>
  );
};

export default AddBiometrics;
