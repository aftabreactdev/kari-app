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
// import Navigation from "./src/Navigation/Navigation"
// import Splash from "./src/screens/Splash"
// import OnboadingScreen1 from "./src/screens/OnboadingScreen1"

// import OnboadingScreen2 from "./src/screens/OnboadingScreen2"
// import OnboadingScreen3 from "./src/screens/OnboadingScreen3"
// import WelcomeScreen from "./src/screens/WelcomeScreen"
// import Signup from "./src/screens/Signup"
// import Signup1 from "./src/screens/Signup1"
// import VerificationCode from "./src/screens/VerificationCode"
// import AccountVerified from "./src/screens/AccountVerified"
// import Login from "./src/screens/Login"
// import AddAddress from "./src/screens/AddAddress"
// import SaveAddress from "./src/screens/SaveAddress"
// import Addpin from "./src/screens/Addpin"
// import PinVerified from "./src/screens/PinVerified"
// import AddBiometrics from "./src/screens/AddBiometrics"
// import LockScreen from "./src/screens/LockScreen"
import Home from "./src/screens/Home"
// import BottomBar from "./src/Navigation/BottomBar"


const App = () => {
  return (
    <>
      <StatusBar hidden={true} />
      <Home/>


    </>
  );
};

export default App;
