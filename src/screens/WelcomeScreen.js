import React from "react";
import { StatusBar } from "react-native";

import BackgroundImage from "../components/BackgroundImage";
import SkipButton from "../components/SkipButton";
import WelcomeText from "../components/WelcomeText";
import DividerWithText from "../components/DividerWithText";
import SocialButton from "../components/SocialButton";
import PrimaryOutlineButton from "../components/PrimaryOutlineButton";
import AuthFooter from "../components/AuthFooter";

const WelcomeScreen = () => {
  return (
    <>
      <StatusBar hidden />

      <BackgroundImage source={require("../assets/welcome.jpg")} />

      <SkipButton onPress={() => console.log("Skip")} />

      <WelcomeText />

      <DividerWithText />

      <SocialButton
        icon={require("../assets/facebook.png")}
        text="FACEBOOK"
        onPress={() => console.log("Facebook")}
      />

      <SocialButton
        icon={require("../assets/google.png")}
        text="GOOGLE"
        onPress={() => console.log("Google")}
      />

      <PrimaryOutlineButton
        text="Start with email or phone"
        onPress={() => console.log("Email")}
      />

      <AuthFooter onSignIn={() => console.log("Sign In")} />
    </>
  );
};

export default WelcomeScreen;
