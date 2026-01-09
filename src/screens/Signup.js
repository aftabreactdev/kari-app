import React, { useState } from "react";
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
import Ionicons from "react-native-vector-icons/Ionicons";

const Signup = ({ navigation }) => {
  const [focusedInput, setFocusedInput] = useState(null);
  const [passwordVisible, setPasswordVisible] = useState(false);

  // Form states
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Validations
  const handleSignup = () => {
    // Trim inputs
    if (!firstName.trim() || !lastName.trim() || !email.trim() || !password.trim()) {
      Alert.alert("Error", "Please fill all fields");
      return;
    }

    // Email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert("Error", "Please enter a valid email");
      return;
    }

    // Password length check
    if (password.length < 6) {
      Alert.alert("Error", "Password must be at least 6 characters");
      return;
    }

    // For now just logging data
    console.log("Signup Data:", { firstName, lastName, email, password });

    // Navigate to Home page with first & last name
    // navigation.navigate("Home", { firstName, lastName });
      navigation.navigate("Signup1", { firstName, lastName, email, password });

  };

  // Placeholder social login functions
  const handleFacebookLogin = () => Alert.alert("Facebook Login", "Facebook login clicked!");
  const handleGoogleLogin = () => Alert.alert("Google Login", "Google login clicked!");

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <StatusBar hidden />

      {/* Top Image */}
      <View style={{ opacity: 0.1, alignSelf: "flex-end", margin: 10 }}>
        <Image source={require("../assets/k.png")} style={{ height: H(12), width: W(16) }} />
      </View>

      {/* Title */}
      <Text style={{ marginLeft: 25, fontWeight: "700", fontSize: H(4) }}>Sign Up</Text>

      {/* Name Inputs */}
      <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 25, marginTop: 20 }}>
        <View>
          <Text style={labelStyle}>First Name</Text>
          <TextInput
            value={firstName}
            onChangeText={setFirstName}
            style={[inputStyle, { width: W(35), borderColor: focusedInput === "firstName" ? "#fec00f" : "#ccc" }]}
            placeholder="Ogoluwa"
            onFocus={() => setFocusedInput("firstName")}
            onBlur={() => setFocusedInput(null)}
          />
        </View>

        <View>
          <Text style={labelStyle}>Last Name</Text>
          <TextInput
            value={lastName}
            onChangeText={setLastName}
            style={[inputStyle, { width: W(35), borderColor: focusedInput === "lastName" ? "#fec00f" : "#ccc" }]}
            placeholder="Ojewale"
            onFocus={() => setFocusedInput("lastName")}
            onBlur={() => setFocusedInput(null)}
          />
        </View>
      </View>

      {/* Email */}
      <View style={{ marginTop: 25, marginHorizontal: 25 }}>
        <Text style={labelStyle}>E-mail</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          style={[inputStyle, { width: W(80), borderColor: focusedInput === "email" ? "#fec00f" : "#ccc" }]}
          placeholder="hello@ogopedia.com"
          keyboardType="email-address"
          onFocus={() => setFocusedInput("email")}
          onBlur={() => setFocusedInput(null)}
        />
      </View>

      {/* Password */}
      <View style={{ marginTop: 20, marginHorizontal: 25 }}>
        <Text style={labelStyle}>Password</Text>
        <View
          style={[
            inputStyle,
            { width: W(80), flexDirection: "row", alignItems: "center", paddingHorizontal: 10, borderColor: focusedInput === "password" ? "#fec00f" : "#ccc" },
          ]}
        >
          <TextInput
            value={password}
            onChangeText={setPassword}
            style={{ flex: 1, textAlign: "center" }}
            secureTextEntry={!passwordVisible}
            placeholder="●●●●●●"
            onFocus={() => setFocusedInput("password")}
            onBlur={() => setFocusedInput(null)}
          />

          <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
            <Ionicons name={passwordVisible ? "eye" : "eye-off"} size={H(3)} color="#9796a1" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Sign Up Button */}
      <TouchableOpacity onPress={handleSignup} style={buttonStyle}>
        <Text style={buttonTextStyle}>Sign Up</Text>
      </TouchableOpacity>

      {/* Login */}
      <View style={{ flexDirection: "row", alignSelf: "center", marginTop: 20 }}>
        <Text style={{ fontSize: H(2) }}>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={{ marginLeft: 5, fontSize: H(2), color: "#fec00f", textDecorationLine: "underline" }}>Login</Text>
        </TouchableOpacity>
      </View>

      {/* Social Login */}
      <View style={{ flexDirection: "row", alignItems: "center", marginTop: 20, marginHorizontal: 25 }}>
        <View style={{ flex: 1, height: 1, backgroundColor: "#5b5b5e" }} />
        <Text style={{ marginHorizontal: 10, color: "#5b5b5e", fontSize: W(3.5) }}>Sign up with</Text>
        <View style={{ flex: 1, height: 1, backgroundColor: "#5b5b5e" }} />
      </View>

      <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 20, marginHorizontal: 25 }}>
        <TouchableOpacity style={socialButton} onPress={handleFacebookLogin}>
          <Image source={require("../assets/facebook.png")} style={socialIcon} />
          <Text style={socialText}>Facebook</Text>
        </TouchableOpacity>

        <TouchableOpacity style={socialButton} onPress={handleGoogleLogin}>
          <Image source={require("../assets/google.png")} style={socialIcon} />
          <Text style={socialText}>Google</Text>
        </TouchableOpacity>
      </View>

      <View style={{ height: 50 }} />
    </ScrollView>
  );
};

export default Signup;

/* ---------- STYLES ---------- */
const labelStyle = { color: "#9796a1", fontSize: H(2), marginBottom: 5 };
const inputStyle = { backgroundColor: "#f8f8f8", height: H(7.5), borderRadius: 10, borderWidth: 1.5, textAlign: "center" };
const buttonStyle = { backgroundColor: "#fec02d", height: H(6.5), width: W(70), borderRadius: 25, alignSelf: "center", marginTop: 30, justifyContent: "center" };
const buttonTextStyle = { fontWeight: "600", fontSize: H(2.5), textAlign: "center" };
const socialButton = { flexDirection: "row", alignItems: "center", justifyContent: "center", backgroundColor: "white", height: H(8), width: W(40), borderRadius: H(5), shadowColor: "#000", shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.15, shadowRadius: 6, elevation: 6 };
const socialIcon = { height: H(4), width: W(8), resizeMode: "contain", marginRight: 10 };
const socialText = { fontSize: H(2.2), fontWeight: "500" };
const nameContainer = { flexDirection: "row", justifyContent: "space-between", marginHorizontal: 25, marginTop: 20 };
