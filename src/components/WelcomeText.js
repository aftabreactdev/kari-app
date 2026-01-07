import React from "react";
import { View, Text } from "react-native";
import { widthPercentageToDP as W, heightPercentageToDP as H } from "react-native-responsive-screen";

const WelcomeText = ({
  title = "Welcome",
  highlight = "Kari",
  subtitle = "Kari anything, anywhere",
}) => {
  return (
    <View style={{ position: "absolute", top: H(30), left: W(10) }}>
      <Text
        style={{
          color: "white",
          fontSize: W(10),
          fontWeight: "700",
          fontFamily: "Gilroy",
        }}
      >
        {title}{"\n"}to{" "}
        <Text style={{ color: "rgba(254,192,15,1)" }}>
          {highlight}
        </Text>
      </Text>

      {!!subtitle && (
        <Text
          style={{
            marginTop: 10,
            color: "white",
            fontSize: W(4),
            fontFamily: "Sofia Pro",
          }}
        >
          {subtitle}
        </Text>
      )}
    </View>
  );
};

export default WelcomeText;
