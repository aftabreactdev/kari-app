import React from "react";
import { TouchableOpacity, Text, Image } from "react-native";
import { widthPercentageToDP as W, heightPercentageToDP as H } from "react-native-responsive-screen";

const SocialButton = ({ icon, text, onPress }) => {
  if (!icon) {
    console.warn("SocialButton: icon is missing");
    return null;
  }

  return (
    <TouchableOpacity
      onPress={typeof onPress === "function" ? onPress : undefined}
      style={{
        backgroundColor: "white",
        height: H(8),
        width: W(40),
        borderRadius: H(5),
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",

        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 6,
        elevation: 6,
      }}
    >
      <Image
        source={icon}
        style={{ height: H(4), width: W(8), resizeMode: "contain", marginRight: 10 }}
      />

      <Text
        style={{
          fontFamily: "Sofia Pro",
          fontSize: H(2.25),
          fontWeight: "500",
          letterSpacing: 0.65,
        }}
      >
        {text || "BUTTON"}
      </Text>
    </TouchableOpacity>
  );
};

export default SocialButton;