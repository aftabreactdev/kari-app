import React from "react";
import {
  View,
  Image,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { widthPercentageToDP as W, heightPercentageToDP as H } from "react-native-responsive-screen";


import BackgroundImage from "../components/BackgroundImage";
import SkipButton from "../components/SkipButton";
import WelcomeText from "../components/WelcomeText";
import DividerWithText from "../components/DividerWithText";
import SocialButton from "../components/SocialButton";
import PrimaryOutlineButton from "../components/PrimaryOutlineButton";
import AuthFooter from "../components/AuthFooter";

const WelcomeScreen = ({navigation}) => {
  return (
    <>
      <StatusBar hidden />

      <BackgroundImage source={require("../assets/welcome.jpg")} />

      <SkipButton onPress={() => console.log("Skip")} />

      <WelcomeText />

      <DividerWithText />

      <View style={{
        flexDirection: "row",
        marginLeft: 30,
        top: H(67),
        gap: 15,
        position: "absolute"
      }}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            backgroundColor: "white",
            height: H(8),
            width: W(40),
            borderRadius: H(5),
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",

            // Shadow
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.15,
            shadowRadius: 6,
            elevation: 6,
          }}
        >

          <View>
            <Image source={require("../assets/blue.png")}

              style={{
                height: H(4.5),
                width: W(8),
                resizeMode: "contain",
                marginRight: 15,
                top: 13,

              }}
            />

            <Image source={require("../assets/facebook.png")}

              style={{
                height: H(4),
                width: W(8),
                resizeMode: "contain",
                bottom: 12


              }}
            />
          </View>


          <Text
            style={{
              fontFamily: "Sofia Pro",
              fontSize: H(2.2),
              fontWeight: "500",
              letterSpacing: 0.6,
            }}
          >
            FACEBOOK
          </Text>
        </TouchableOpacity>


        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            backgroundColor: "white",
            height: H(8),
            width: W(40),
            borderRadius: H(5),
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",

            // Shadow
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.15,
            shadowRadius: 6,
            elevation: 6,
          }}
        >

          <View>
            <Image source={require("../assets/google.png")}

              style={{
                height: H(4),
                width: W(8),
                resizeMode: "contain",
                marginRight: 15,

              }}
            />


          </View>


          <Text
            style={{
              fontFamily: "Sofia Pro",
              fontSize: H(2.2),
              fontWeight: "500",
              letterSpacing: 0.6,
            }}
          >
            GOOGLE
          </Text>
        </TouchableOpacity>
      </View>


      <PrimaryOutlineButton
        text="Start with email or phone"
        onPress={() => navigation.navigate("Signup")}

      />

      <AuthFooter onSignIn={() => console.log("Sign In")} />
    </>
  );
};

export default WelcomeScreen;