import React, { useState } from "react";
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
    StatusBar,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { widthPercentageToDP as W, heightPercentageToDP as H } from "react-native-responsive-screen";

const items = [
  { name: "Electricity", image: require("../assets/electricity.png") },
  { name: "Data", image: require("../assets/data.png") },
  { name: "Deals", image: require("../assets/deal.png") },
  { name: "Insurance", image: require("../assets/insurance.png") },
  { name: "Sell on Kari", image: require("../assets/sell.png") },
  { name: "Airtime", image: require("../assets/iphone.png") },
  { name: "Bills", image: require("../assets/receipt.png") },
  { name: "More", image: require("../assets/More.png") },
];

const HomeScreen = () => {
    // Separate state for different sections
    const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
    const [selectedKariPayIndex, setSelectedKariPayIndex] = useState(0);

    return (
        <ScrollView
            style={{ flex: 1, backgroundColor: "#fff" }}
            showsVerticalScrollIndicator={false}
        >
            <StatusBar backgroundColor="#fff" barStyle="dark-content" />

            {/* HEADER */}
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingHorizontal: W(5),
                    marginTop: H(3),
                }}
            >
                <TouchableOpacity>
                    <Image 
                        source={require("../assets/threelines.png")}
                        style={{
                            height: H(3),
                            width: H(3.5),
                        }}
                    />
                </TouchableOpacity>
                
                <View style={{ alignItems: "center" }}>
                    <Text style={{ fontSize: 14, fontWeight: "600" }}>My Location</Text>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <TouchableOpacity>
                            <Ionicons name="location-outline" size={14} color="rgba(199, 87, 64, 1)" />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 12, color: "rgba(199, 87, 64, 1)", marginLeft: 4 }}>
                            10, Anifowose Str, Ikeja
                        </Text>
                        <TouchableOpacity>
                            <EvilIcons name="pencil" size={14} color="rgba(199, 87, 64, 1)" />
                        </TouchableOpacity>
                    </View>
                </View>

                <TouchableOpacity>
                    <Image 
                        source={require("../assets/Profile.png")}
                        style={{
                            height: H(12),
                            width: H(12),
                            borderRadius: H(6),
                        }}
                    />
                </TouchableOpacity>
            </View>

            {/* GREETING */}
            <View style={{ paddingHorizontal: W(5), marginTop: H(4) }}>
                <Text style={{ fontSize: 18, fontWeight: "600" }}>Hi Ogoluwa,</Text>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginTop: H(1),
                    }}
                >
                    <Text style={{ color: "#999" }}>Your available balance</Text>
                    <Text style={{ fontSize: 22, fontWeight: "700" }}>₦15,903</Text>
                </View>
            </View>

            {/* ACTION BUTTONS */}
            <View
                style={{
                    backgroundColor: "rgba(254, 192, 15, 1)",
                    marginHorizontal: W(5),
                    borderRadius: 14,
                    marginTop: H(3),
                    flexDirection: "row",
                    justifyContent: "space-around",
                    paddingVertical: H(2),
                }}
            >
                <TouchableOpacity style={{ alignItems: "center" }}>
                    <Ionicons name="swap-horizontal-outline" size={24} color="#000" />
                    <Text style={{ marginTop: 6, fontSize: 13 }}>Transfer</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ alignItems: "center" }}>
                    <Ionicons name="card-outline" size={24} color="#000" />
                    <Text style={{ marginTop: 6, fontSize: 13 }}>Top Up</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ alignItems: "center" }}>
                    <MaterialIcons name="history" size={24} color="#000" />
                    <Text style={{ marginTop: 6, fontSize: 13 }}>History</Text>
                </TouchableOpacity>
            </View>

            {/* CATEGORY ICONS */}
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-around",
                    marginTop: H(4),
                }}
            >
                {[
                    { label: "Wallet", img: require("../assets/wallet.png") },
                    { label: "Rides", img: require("../assets/ride.png") },
                    { label: "Food", img: require("../assets/food1.png") },
                    { label: "Mart", img: require("../assets/mart.png") },
                ].map((item, index) => {
                    const isSelected = selectedCategoryIndex === index;

                    return (
                        <TouchableOpacity
                            key={index}
                            style={{ alignItems: "center" }}
                            onPress={() => setSelectedCategoryIndex(index)}
                            activeOpacity={0.7}
                        >
                            <View
                                style={{
                                    height: 56,
                                    width: 56,
                                    borderRadius: 28,
                                    borderWidth: 2,
                                    borderColor: isSelected ? "#FFC107" : "#E0E0E0",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    backgroundColor: isSelected ? "rgba(255,193,7,0.1)" : "#fff",
                                }}
                            >
                                <Image
                                    source={item.img}
                                    style={{
                                        height: 26,
                                        width: 26,
                                        resizeMode: "contain",
                                    }}
                                />
                            </View>
                            <Text
                                style={{
                                    marginTop: 8,
                                    fontSize: 13,
                                    color: isSelected ? "#FFC107" : "#000",
                                }}
                            >
                                {item.label}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </View>

            {/* KARI PAY */}
            <Text
                style={{
                    fontSize: 18,
                    fontWeight: "700",
                    marginHorizontal: W(5),
                    marginTop: H(4),
                }}
            >
                KariPay
            </Text>

            <View
                style={{
                    flexDirection: "row",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                    paddingHorizontal: W(5),
                    marginTop: H(2),
                }}
            >
                {items.map((item, index) => {
                    const isSelected = selectedKariPayIndex === index;

                    return (
                        <TouchableOpacity
                            key={index}
                            style={{
                                width: "22%",
                                alignItems: "center",
                                marginBottom: H(3),
                            }}
                            activeOpacity={0.7}
                            onPress={() => setSelectedKariPayIndex(index)}
                        >
                            <View
                                style={{
                                    height: 48,
                                    width: 48,
                                    borderRadius: 12,
                                    backgroundColor: "#F6F6F6",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderWidth: isSelected ? 2 : 0,
                                    borderColor: isSelected ? "#FFC107" : "transparent",
                                }}
                            >
                                <Image
                                    source={item.image}
                                    style={{ width: 24, height: 24, resizeMode: "contain" }}
                                />
                            </View>
                            <Text
                                style={{
                                    fontSize: 11,
                                    textAlign: "center",
                                    marginTop: 6,
                                }}
                            >
                                {item.name}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </View>

            {/* OFFER CARD */}
            <View
                style={{
                    marginHorizontal: W(5),
                    padding: W(5),
                    alignItems: "center",
                }}
            >
                <View style={{ flex: 1 }}>
                    <Image 
                        source={require("../assets/Promo2.png")} 
                        style={{
                            height: H(25),
                            width: W(90),
                            borderRadius: H(2)
                        }}
                    />
                    <TouchableOpacity
                        style={{
                            backgroundColor: "#fff",
                            paddingVertical: 8,
                            paddingHorizontal: 16,
                            borderRadius: 10,
                            alignSelf: "flex-start",
                            position: "absolute",
                            left: H(26),
                            top: H(14.5)
                        }}
                    >
                        <Text style={{ color: "rgba(199, 87, 64, 1)", fontWeight: "600" }}>
                            Order Now
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* BOTTOM CARDS */}
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    paddingHorizontal: W(5),
                    marginVertical: H(4),
                }}
            >
                <TouchableOpacity>
                    <Image 
                        source={require("../assets/Frame1.png")} 
                        style={{
                            height: H(30),
                            width: W(40)
                        }}
                    />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image 
                        source={require("../assets/Frame2.png")} 
                        style={{
                            height: H(30),
                            width: W(40)
                        }}
                    />
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default HomeScreen;