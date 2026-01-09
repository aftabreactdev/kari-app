import React from "react";
import {
  View,
  Image,
  StatusBar,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { widthPercentageToDP as W, heightPercentageToDP as H } from "react-native-responsive-screen";

const AccountVerified = ({ navigation }) => {
  const handleProceed = () => {
    console.log("Proceed pressed");
    // navigation.navigate("Login"); // optional
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
      <Text
        style={{
          fontWeight: "700",
          fontSize: H(4),
          alignSelf: "center",
        }}
      >
        Account Verified
      </Text>

      <Text
        style={{
          fontWeight: "700",
          fontSize: H(4),
          alignSelf: "center",
        }}
      >
        Successfully
      </Text>

      {/* Success Icon */}
      <View
        style={{
          alignSelf: "center",
          justifyContent: "center",
          marginTop: H(10),
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
            height: H(11),
            width: W(25),
            position: "absolute",
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
          marginTop: 60,
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

      <View style={{ height: 50 }} />
    </ScrollView>
  );
};

export default AccountVerified;
