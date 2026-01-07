import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { widthPercentageToDP as W, heightPercentageToDP as H } from "react-native-responsive-screen";

const PrimaryOutlineButton = ({ text, onPress }) => {
  if (!text) {
    console.warn("PrimaryOutlineButton: text is required");
    return null;
  }

  return (
    <TouchableOpacity
      onPress={typeof onPress === "function" ? onPress : undefined}
      style={{
        position: "absolute",
        top: H(75),
        alignSelf: "center",
        height: H(7),
        width: W(70),
        borderRadius: W(10),
        borderWidth: 1,
        borderColor: "white",
        backgroundColor: "rgba(255,255,255,0.3)",
        justifyContent: "center",
      }}
    >
      <Text
        style={{
          textAlign: "center",
          color: "white",
          fontSize: H(2.5),
          fontFamily: "Sofia Pro",
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default PrimaryOutlineButton;
