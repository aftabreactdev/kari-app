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

const App = () => {
  return (
    <>
      <StatusBar hidden={true} />
      <Navigation/>


    </>
  );
};

export default App;
