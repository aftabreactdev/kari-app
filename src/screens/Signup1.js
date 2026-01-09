import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Modal,
  FlatList,
  TouchableWithoutFeedback,
  StatusBar,
  Image
} from "react-native";
import { widthPercentageToDP as W, heightPercentageToDP as H } from "react-native-responsive-screen";
import Ionicons from "react-native-vector-icons/Ionicons";

// Sample country codes and flags
const countryCodes = [
  { code: "+1", country: "USA", flag: "🇺🇸" },
  { code: "+92", country: "Pakistan", flag: "🇵🇰" },
  { code: "+44", country: "UK", flag: "🇬🇧" },
  { code: "+234", country: "Nigeria", flag: "🇳🇬" },
];

const Signup1 = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countryCodes[3]); // Default Nigeria
  const [phone, setPhone] = useState("");
  const [isFocused, setIsFocused] = useState(false); // For input focus

  // ---------------- Validation ----------------
  const handleSend = () => {
    if (!phone) {
      alert("Please enter your phone number");
      return;
    }
    if (phone.length < 7) {
      alert("Please enter a valid phone number");
      return;
    }

    alert(`Phone: ${selectedCountry.code} [${phone}]`);
  };

  return (
    <ScrollView keyboardShouldPersistTaps="handled" style={{ flex: 1 }}>
      <StatusBar hidden />

      {/* Back Button */}
      <View style={{ flexDirection: "row", padding: 12 }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={26} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Top Image */}
      <View style={{ opacity: 0.1, alignSelf: "flex-end", margin: 10 }}>
        <Image
          source={require("../assets/k.png")}
          style={{ height: H(20), width: W(25) }}
        />
      </View>

      {/* Title */}
      <Text style={{ marginLeft: 25, fontWeight: "700", fontSize: H(4) }}>
        Registration
      </Text>

      <Text style={{ opacity: 0.5, fontSize: 13, marginTop: 10, marginLeft: 25 }}>
        Enter your phone number to verify your account
      </Text>

      {/* Phone Input with Country Code in brackets */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginHorizontal: 25,
          marginTop: 25,
          borderWidth: 1.5,
          borderRadius: 10,
          borderColor: isFocused ? "rgba(254, 200, 45, 1)" : "rgba(200,200,200,1)", // <-- dynamic border
          paddingHorizontal: 10,
          backgroundColor: "rgba(248,248,248,1)",
          height: H(10),
        }}
      >
        {/* Flag */}
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <Text style={{ fontSize: H(3) }}>{selectedCountry.flag}</Text>
          <Ionicons
            name="caret-down"
            size={20}
            style={{ marginLeft: 5, marginRight: 10, color: "rgba(151, 150, 161, 1)" }}
          />
        </TouchableOpacity>

        {/* Country Code */}
        <Text style={{ fontSize: H(2.2) }}>
          [{selectedCountry.code}]
        </Text>

        {/* Phone Input */}
        <TextInput
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
          placeholder="Enter number"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          style={{
            flex: 1,
            marginLeft: 10,
            fontSize: H(2.2),
            paddingVertical: 5,
          }}
        />
      </View>

      {/* Country Code Modal */}
      <Modal visible={modalVisible} transparent animationType="fade">
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.5)" }}>
            <View
              style={{
                backgroundColor: "#fff",
                margin: 50,
                borderRadius: 10,
                padding: 20,
                maxHeight: H(50),
              }}
            >
              <FlatList
                data={countryCodes}
                keyExtractor={(item) => item.code}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={{ flexDirection: "row", padding: 10, alignItems: "center" }}
                    onPress={() => {
                      setSelectedCountry(item);
                      setModalVisible(false);
                    }}
                  >
                    <Text style={{ fontSize: H(3), marginRight: 10 }}>{item.flag}</Text>
                    <Text style={{ fontSize: H(2.5) }}>
                      {item.country} ({item.code})
                    </Text>
                  </TouchableOpacity>
                )}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      {/* Send Button */}
      <TouchableOpacity
        onPress={handleSend}
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
            fontWeight: "600",
            fontSize: H(2.5),
            textAlign: "center",
          }}
        >
          Send
        </Text>
      </TouchableOpacity>

      <View style={{ height: 50 }} />
    </ScrollView>
  );
};

export default Signup1;
