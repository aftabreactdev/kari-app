import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { heightPercentageToDP as H } from "react-native-responsive-screen";

const AuthFooter = ({ onSignIn }) => {
  return (
    <View
      style={{
        position: "absolute",
        top: H(82),
        flexDirection: "row",
        alignSelf: "center",
      }}
    >
      <Text style={{ color: "white", fontSize: H(2.5) }}>
        Already have an account?
      </Text>

      <TouchableOpacity
        onPress={typeof onSignIn === "function" ? onSignIn : undefined}
      >
        <Text
          style={{
            marginLeft: 5,
            color: "white",
            fontSize: H(2.5),
            textDecorationLine: "underline",
          }}
        >
          Sign In
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AuthFooter;
