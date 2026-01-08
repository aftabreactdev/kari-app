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
        


      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;