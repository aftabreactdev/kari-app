import React from "react";
import { View } from "react-native";
import { widthPercentageToDP as W, heightPercentageToDP as H } from "react-native-responsive-screen";

const OnboardingIndicator = ({ step }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        gap: 10,
        alignSelf: "center",
        marginTop: H(3),
      }}
    >
      {[1, 2, 3].map((item) => (
        <View
          key={item}
          style={{
            backgroundColor: "rgba(199, 87, 64, 1)",
            height: H(1.5),
            width: step === item ? W(10) : W(3),
            opacity: step === item ? 1 : 0.4,
            borderRadius: H(2),
          }}
        />
      ))}
    </View>
  );
};

export default OnboardingIndicator;
