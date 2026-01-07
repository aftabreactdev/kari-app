import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { widthPercentageToDP as W, heightPercentageToDP as H } from "react-native-responsive-screen";

const SkipButton = ({ onPress, label = "Skip" }) => {
  const handlePress = () => {
    if (typeof onPress !== "function") {
      console.warn("SkipButton: onPress is not a function");
      return;
    }
    onPress();
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={{
        position: "absolute",
        top: H(3.6),
        left: W(78),
        width: W(14.7),
        height: H(3.9),
        borderRadius: 10,
        backgroundColor: "rgba(254,192,15,1)",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ color: "#03020A", fontWeight: "500" }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default SkipButton;
