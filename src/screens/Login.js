import React, { useState } from "react";
import {
    View,
    Image,
    StatusBar,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import { widthPercentageToDP as W, heightPercentageToDP as H } from "react-native-responsive-screen";
import Ionicons from "react-native-vector-icons/Ionicons";

const Login = ({ navigation }) => {
    const [focusedInput, setFocusedInput] = useState(null);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        console.log("Login Data:", { email, password });
    };

    return (
        <ScrollView keyboardShouldPersistTaps="handled">
            <StatusBar hidden />

            {/* Top Image */}
            <View style={{ opacity: 0.1, alignSelf: "flex-end", margin: 10 }}>
                <Image
                    source={require("../assets/k.png")}
                    style={{ height: H(20), width: W(25) }}
                />
            </View>

            {/* Title */}
            <Text style={{
                marginLeft: 25,
                fontWeight: "700",
                fontSize: H(4),
            }}>
                Login
            </Text>

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
                            borderColor: focusedInput === "email"
                                ? "rgba(254,192,15,1)"
                                : "rgba(200,200,200,1)",
                        },
                    ]}
                    placeholder="example@gmail.com"
                    keyboardType="email-address"
                    onFocus={() => setFocusedInput("email")}
                    onBlur={() => setFocusedInput(null)}
                />
            </View>

            {/* Password */}
            <View style={{ marginTop: 20, marginHorizontal: 25 }}>
                <Text style={labelStyle}>Password</Text>

                <View style={[
                    inputStyle,
                    {
                        width: W(80),
                        flexDirection: "row",
                        alignItems: "center",
                        paddingHorizontal: 10,
                        borderColor: focusedInput === "password"
                            ? "rgba(254,192,15,1)"
                            : "rgba(200,200,200,1)",
                    },
                ]}>
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

            {/* Login Button */}
            <TouchableOpacity
                onPress={handleLogin}
                style={{
                    backgroundColor: "rgba(254,200,45,1)",
                    height: H(6.5),
                    width: W(70),
                    borderRadius: 25,
                    alignSelf: "center",
                    marginTop: 30,
                    justifyContent: "center",
                }}
            >
                <Text style={{
                    fontWeight: "600",
                    fontSize: H(2.5),
                    textAlign: "center",
                }}>
                    Login
                </Text>
            </TouchableOpacity>

            {/* Signup Redirect */}
            <View style={{ flexDirection: "row", alignSelf: "center", marginTop: 20 }}>
                <Text style={{ fontSize: H(2), color: "rgba(91,91,94,1)" }}>
                    Don’t have an account?
                </Text>

                <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
                    <Text style={{
                        marginLeft: 5,
                        fontSize: H(2),
                        fontWeight: "600",
                        color: "rgba(91,91,94,1)",
                    }}>
                        Sign Up
                    </Text>
                </TouchableOpacity>
            </View>

            {/* Divider */}
            <View style={{
                left: W(10),
                flexDirection: "row",
                alignItems: "center",
                marginTop: 30,
            }}>
                <View style={{ height: H(0.1), width: W(25), backgroundColor: "rgba(91,91,94,1)" }} />
                <Text style={{
                    marginHorizontal: 10,
                    color: "rgba(91,91,94,1)",
                    fontSize: W(3.5),
                }}>
                    Sign up with
                </Text>
                <View style={{ height: H(0.1), width: W(25), backgroundColor: "rgba(91,91,94,1)" }} />
            </View>

            {/* Social Buttons */}
            <View style={{
                flexDirection: "row",
                marginLeft: 30,
                marginTop: 30,
                gap: 15,
            }}>
                {/* Facebook */}
                <TouchableOpacity style={socialBtn}>
                    <View>
                        <Image source={require("../assets/blue.png")}
                            style={{ height: H(4.5), width: W(8), top: 13 ,right:10}} />
                        <Image source={require("../assets/facebook.png")}
                            style={{ height: H(4.5), width: W(6), bottom: 10 ,right:5}} />
                    </View>
                    <Text style={socialText}>FACEBOOK</Text>
                </TouchableOpacity>

                {/* Google */}
                <TouchableOpacity style={socialBtn}>
                    <Image source={require("../assets/google.png")}
                        style={{ height: H(4.5), width: W(8), marginRight: 15 }} />
                    <Text style={socialText}>GOOGLE</Text>
                </TouchableOpacity>
            </View>

            <View style={{ height: 50 }} />
        </ScrollView>
    );
};

export default Login;

/* ---------- STYLES ---------- */

const labelStyle = {
    color: "rgba(151,150,161,1)",
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

const socialBtn = {
    backgroundColor: "white",
    height: H(8),
    width: W(40),
    borderRadius: H(5),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 6,
};

const socialText = {
    fontSize: H(2.2),
    fontWeight: "500",
    letterSpacing: 0.6,
};
