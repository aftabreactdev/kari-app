import React from "react";
import { View, Text } from "react-native";
import { widthPercentageToDP as W, heightPercentageToDP as H } from "react-native-responsive-screen";

const DividerWithText = ({ text = "sign in with" }) => {
  return (
    <View
      style={{
        position: "absolute",
        top: H(60),
        left: W(10),
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <View style={{ height: H(0.2), width: W(25), backgroundColor: "rgba(255,255,255,0.5)" }} />

      <Text
        style={{
          marginHorizontal: 10,
          color: "white",
          fontSize: W(4),
          fontFamily: "Sofia Pro",
        }}
      >
        {text}
      </Text>

      <View style={{ height: H(0.2), width: W(25), backgroundColor: "rgba(255,255,255,0.5)" }} />
    </View>
  );
};

export default DividerWithText;
