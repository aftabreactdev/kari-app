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
import {
  widthPercentageToDP as W,
  heightPercentageToDP as H,
} from "react-native-responsive-screen";
import Ionicons from "react-native-vector-icons/Ionicons";

const AddAddress = ({ navigation }) => {
  const [address, setAddress] = useState("");
  const [focused, setFocused] = useState(false);

  const handleSaveAddress = () => {
    const trimmedAddress = address.trim();

    if (!trimmedAddress) {
      Alert.alert("Error", "Address is required");
      return;
    }

    if (trimmedAddress.length < 5) {
      Alert.alert("Error", "Please enter a valid address");
      return;
    }

    Alert.alert("Success", "Address saved successfully");
    // navigation.goBack();
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

      {/* Map Section */}
      <View
        style={{
          position: "absolute",
          top: H(8),
          alignSelf: "center",
        }}
      >
        <Image
          source={require("../assets/map.png")}
          style={{
            height: H(20),
            width: W(80),
            borderRadius: H(2),
          }}
        />

        <TouchableOpacity
          style={{
            position: "absolute",
            alignSelf: "center",
            top: "45%",
          }}
        >
          <Ionicons
            name="location-sharp"
            size={28}
            color="rgba(15, 77, 254, 1)"
          />
        </TouchableOpacity>
      </View>

      {/* Selected Address Text */}
<Text

  style={{
    fontSize: 14,
    marginTop: H(20),
    marginHorizontal: 40,
    fontWeight: "700",
  }}
>
  1901 Thornridge Cir. Shiloh, Hawaii 81063
</Text>


      {/* Address Input */}
      <View style={{ marginTop: H(4), marginHorizontal: 25 }}>
        <Text style={labelStyle}>Enter your Address</Text>

        <TextInput
          value={address}
          onChangeText={setAddress}
          style={[
            inputStyle,
            {
              borderColor: focused
                ? "rgba(254, 192, 15, 1)"
                : "rgba(200,200,200,1)",
            },
          ]}
          placeholder="Address"
          placeholderTextColor="rgba(150,150,150,1)"
          textAlign="left"
          paddingLeft={15}
          multiline
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
      </View>

      {/* Save Button */}
      <TouchableOpacity
        onPress={handleSaveAddress}
        style={{
          backgroundColor: "rgba(254, 200, 45, 1)",
          height: H(6.5),
          width: W(70),
          borderRadius: 25,
          alignSelf: "center",
          marginTop: H(8),
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
          Save Address
        </Text>
      </TouchableOpacity>

      <View style={{ height: 40 }} />
    </ScrollView>
  );
};

export default AddAddress;

/* ---------- STYLES ---------- */

const labelStyle = {
  color: "rgba(151, 150, 161, 1)",
  fontSize: H(2),
  marginBottom: 6,
  fontWeight: "600",
};

const inputStyle = {
  backgroundColor: "rgba(248,248,248,1)",
  height: H(8),
  borderRadius: 10,
  borderWidth: 1.2,
  fontSize: 14,
};
