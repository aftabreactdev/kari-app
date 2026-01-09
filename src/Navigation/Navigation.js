import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

// Screens
import Splash from "../screens/Splash";
import OnboadingScreen1 from "../screens/OnboadingScreen1";
import OnboadingScreen2 from "../screens/OnboadingScreen2";
import OnboadingScreen3 from "../screens/OnboadingScreen3";
import WelcomeScreen from "../screens/WelcomeScreen";
import Signup from "../screens/Signup"
import Signup1 from "../screens/Signup1"
import VerificationCode from "../src/screens/VerificationCode";
import AccountVerified from "../src/screens/AccountVerified"
import Login from "../src/screens/Login"
import AddAddress from "../src/screens/AddAddress"
import SaveAddress from "../src/screens/SaveAddress"
import Addpin from "../src/screens/Addpin"
import PinVerified from "../src/screens/PinVerified"
import AddBiometrics from "../src/screens/AddBiometrics"
import LockScreen from "../src/screens/LockScreen"
const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="OnboadingScreen1" component={OnboadingScreen1} />
        <Stack.Screen name="OnboadingScreen2" component={OnboadingScreen2} />
        <Stack.Screen name="OnboadingScreen3" component={OnboadingScreen3} />
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Signup1" component={Signup1} />
         <Stack.Screen name="VerificationCode" component={VerificationCode} />
         <Stack.Screen name="AccountVerified" component={AccountVerified} />
         <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Addpin" component={Addpin} />
          <Stack.Screen name="PinVerified" component={PinVerified} />
        <Stack.Screen name="AddBiometrics" component={AddBiometrics} />
        <Stack.Screen name="LockScreen" component={LockScreen} />







      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;