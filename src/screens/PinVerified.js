import React from "react";
import {
  View,
  Image,
  StatusBar,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import {
  widthPercentageToDP as W,
  heightPercentageToDP as H,
} from "react-native-responsive-screen";

const PinVerified = ({ navigation }) => {

  const handleProceed = () => {
    // Example validation (replace with real state if needed)
    const isPinSet = true;

    if (!isPinSet) {
      Alert.alert(
        "Error",
        "Security PIN setup is not complete. Please try again."
      );
      return;
    }

    // Success
    // navigation.replace("Home");
    Alert.alert("Success", "PIN verified successfully");
  };

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <StatusBar hidden />

      {/* Top Image */}
      <View style={{ opacity: 0.1, alignSelf: "flex-end", margin: 10 }}>
        <Image
          source={require("../assets/k.png")}
          style={{ height: H(15), width: W(19) }}
        />
      </View>

      {/* Title */}
      <Text
        style={{
          fontWeight: "700",
          fontSize: H(4),
          textAlign: "center",
          marginTop: 10,
        }}
      >
        Security PIN
      </Text>

      <Text
        style={{
          fontWeight: "700",
          fontSize: H(4),
          textAlign: "center",
        }}
      >
        set successfully
      </Text>

      {/* Success Icon */}
      <View
        style={{
          alignSelf: "center",
          justifyContent: "center",
          marginTop: H(8),
        }}
      >
        <Image
          source={require("../assets/circel.png")}
          style={{
            height: H(23),
            width: W(41),
          }}
        />

        <Image
          source={require("../assets/tick.png")}
          style={{
            position: "absolute",
            height: H(11),
            width: W(25),
            alignSelf: "center",
          }}
        />
      </View>

      {/* Proceed Button */}
      <TouchableOpacity
        onPress={handleProceed}
        style={{
          backgroundColor: "rgba(254, 200, 45, 1)",
          height: H(6.5),
          width: W(70),
          borderRadius: 25,
          alignSelf: "center",
          marginTop: H(10),
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

export default PinVerified;
