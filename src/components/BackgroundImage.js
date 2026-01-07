import React from "react";
import { View, Image } from "react-native";
import { widthPercentageToDP as W, heightPercentageToDP as H } from "react-native-responsive-screen";

const BackgroundImage = ({ source }) => {
  if (!source) {
    console.warn("BackgroundImage: source prop is missing");
    return null;
  }

  return (
    <View>
      <Image
        source={source}
        resizeMode="cover"
        style={{ height: H(100), width: W(250) }}
      />

      {/* Overlay */}
      <View
        pointerEvents="none"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: H(100),
          width: W(100),
          backgroundColor: "rgba(0,0,0,0.6)",
        }}
      />
    </View>
  );
};

export default BackgroundImage;
