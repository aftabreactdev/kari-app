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

  // Validation
  const handleSignup = () => {
    if (!firstName || !lastName || !email || !password) {
      Alert.alert("Error", "Please fill all fields");
      return;
    }

    if (!email.includes("@")) {
      Alert.alert("Error", "Please enter a valid email");
      return;
    }

    if (password.length < 6) {
      Alert.alert("Error", "Password must be at least 6 characters");
      return;
    }

    console.log("Signup Data:", {
      firstName,
      lastName,
      email,
      password,
    });
  };

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <StatusBar hidden />

      {/* Top Image */}
      <View style={{ opacity: 0.1, alignSelf: "flex-end", margin: 10 }}>
        <Image
          source={require("../assets/k.png")}
          style={{ height: H(12), width: W(16) }}
        />
      </View>

      {/* Title */}
      <Text
        style={{
          marginLeft: 25,
          fontFamily: "Sofia Pro",
          fontWeight: "700",
          fontSize: H(4),
        }}
      >
        Sign Up
      </Text>

      {/* Name Inputs */}
      <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 25, marginTop: 20 }}>
        {/* First Name */}
        <View>
          <Text style={labelStyle}>First Name</Text>
          <TextInput
            value={firstName}
            onChangeText={setFirstName}
            style={[
              inputStyle,
              {
                width: W(35),
                borderColor:
                  focusedInput === "firstName"
                    ? "rgba(254, 192, 15, 1)"
                    : "rgba(200,200,200,1)",
              },
            ]}
            placeholder="Ogoluwa"
            onFocus={() => setFocusedInput("firstName")}
            onBlur={() => setFocusedInput(null)}
          />
        </View>

        {/* Last Name */}
        <View>
          <Text style={labelStyle}>Last Name</Text>
          <TextInput
            value={lastName}
            onChangeText={setLastName}
            style={[
              inputStyle,
              {
                width: W(35),
                borderColor:
                  focusedInput === "lastName"
                    ? "rgba(254, 192, 15, 1)"
                    : "rgba(200,200,200,1)",
              },
            ]}
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
          style={[
            inputStyle,
            {
              width: W(80),
              borderColor:
                focusedInput === "email"
                  ? "rgba(254, 192, 15, 1)"
                  : "rgba(200,200,200,1)",
            },
          ]}
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
            {
              width: W(80),
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 10,
              borderColor:
                focusedInput === "password"
                  ? "rgba(254, 192, 15, 1)"
                  : "rgba(200,200,200,1)",
            },
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
            <Ionicons
              name={passwordVisible ? "eye" : "eye-off"}
              size={H(3)}
              color="rgba(151,150,161,1)"
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Sign Up Button */}
      <TouchableOpacity
        onPress={handleSignup}
        style={{
          backgroundColor: "rgba(254, 200, 45, 1)",
          height: H(6.5),
          width: W(70),
          borderRadius: 25,
          alignSelf: "center",
          marginTop: 30,
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontFamily: "Sofia Pro",
            fontWeight: "600",
            fontSize: H(2.5),
            textAlign: "center",
          }}
        >
          Sign Up
        </Text>
      </TouchableOpacity>

      {/* Login */}
      <View style={{ flexDirection: "row", alignSelf: "center", marginTop: 20 }}>
        <Text style={{ fontSize: H(2) }}>Already have an account?</Text>

        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text
            style={{
              marginLeft: 5,
              fontSize: H(2),
              color: "rgba(254, 200, 45, 1)",
              textDecorationLine: "underline",
            }}
          >
            Login
          </Text>
        </TouchableOpacity>
      </View>


       <View
      style={{
        
        left: W(10),
        flexDirection: "row",
        alignItems: "center",
        marginTop:10
      }}
    >
      <View style={{ height: H(0.1), width: W(25), backgroundColor: "rgba(91, 91, 94, 1)" }} />

      <Text
        style={{
          marginHorizontal: 10,
          color: "rgba(91, 91, 94, 1)",
          fontSize: W(3.5),
          fontFamily: "Sofia Pro",
        }}
      >
        Sing up with
      </Text>

      <View style={{ height: H(0.1), width: W(25), backgroundColor: "rgba(91, 91, 94, 1)" }} />
    </View>

      <View style={{
        flexDirection:"row",
        marginLeft:30,
        top:20,
        gap:15
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
          top:13,
          
        }}
      />

       <Image source={require("../assets/facebook.png")}
        
        style={{
          height: H(4),
          width: W(8),
          resizeMode: "contain",
          bottom:12
          
          
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

      <View style={{ height: 50 }} />
    </ScrollView>
  );
};

export default Signup;

/* ---------- STYLES ---------- */

const labelStyle = {
  color: "rgba(151,150,161,1)",
  fontFamily: "Sofia Pro",
  fontSize: H(2),
  marginBottom: 5,
};

const inputStyle = {
  backgroundColor: "rgba(248,248,248,1)",
  height: H(7.5),
  borderRadius: 10,
  borderWidth: 1.5,
  textAlign: "center",
};
