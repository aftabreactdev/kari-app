import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import HomeScreen from "./screens/HomeScreen";
import WalletScreen from "./screens/WalletScreen";
import LocationScreen from "./screens/LocationScreen";
import ProfileScreen from "./screens/ProfileScreen";
import NotificationScreen from "./screens/NotificationScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            height: 70,
            borderTopWidth: 1,
          },
          tabBarIcon: ({ focused }) => {
            let iconName;

            if (route.name === "Home") iconName = "home";
            if (route.name === "Wallet") iconName = "wallet-outline";
            if (route.name === "Location") iconName = "location-outline";
            if (route.name === "Profile") iconName = "person-outline";
            if (route.name === "Alerts") iconName = "notifications-outline";

            return (
              <Ionicons
                name={iconName}
                size={24}
                color={focused ? "#FFC107" : "#B0B0B0"}
              />
            );
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Wallet" component={WalletScreen} />
        <Tab.Screen name="Location" component={LocationScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen
          name="Alerts"
          component={NotificationScreen}
          options={{
            tabBarBadge: 6,
            tabBarBadgeStyle: { backgroundColor: "#FFC107", color: "#000" },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
