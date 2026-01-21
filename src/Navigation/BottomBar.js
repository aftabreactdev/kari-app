import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const BottomBar = ({ active = "Home", onChange = () => {} }) => {
  const TabItem = ({ name, icon, badge, type = "ion" }) => {
    const isActive = active === name;
    const iconColor = isActive ? "#000" : "#B0B0B0";

    return (
      <TouchableOpacity
        onPress={() => onChange(name)}
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
        activeOpacity={0.8}
      >
        {/* ICON CONTAINER */}
        <View
          style={{
            width: 44,
            height: 44,
            borderRadius: 22,
            backgroundColor: isActive ? "#FFC107" : "transparent",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* ICON SWITCH */}
          {type === "fa5" ? (
            <FontAwesome5 name={icon} size={20} color={iconColor} />
          ) : (
            <Ionicons name={icon} size={22} color={iconColor} />
          )}

          {/* BADGE */}
          {badge && (
            <View
              style={{
                position: "absolute",
                right: -6,
                top: -6,
                backgroundColor: "#FFC107",
                width: 16,
                height: 16,
                borderRadius: 8,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 10,
                  color: "#000",
                  fontWeight: "bold",
                }}
              >
                {badge}
              </Text>
            </View>
          )}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{
        flexDirection: "row",
        height: 65,
        backgroundColor: "#fff",
        borderTopWidth: 1,
        borderTopColor: "#eee",
        elevation: 10,
      }}
    >
      <TabItem name="Home" icon="home" />
      <TabItem name="Wallet" icon="wallet" />
      <TabItem name="Location" icon="location-outline" />
      
      {/* SHOPPING BAG (FontAwesome5) */}
      <TabItem
        name="Profile"
        icon="shopping-bag"
        type="fa5"
        badge="4"
      />

      <TabItem
        name="Notifications"
        icon="notifications-outline"
        badge="6"
      />
    </View>
  );
};

export default BottomBar;
