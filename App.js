import React from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
    TextInput,
    StatusBar
} from "react-native";
import Navigation from "./src/Navigation/Navigation"
// import WelcomeScreen from "./src/screens/WelcomeScreen"
const App = () => {
  return (
    <>
      <StatusBar hidden={true} />
      <Navigation/>


    </>
  );
};

export default App;
