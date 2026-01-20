import React, { useEffect } from "react";
import { View, Image, StatusBar, Text } from "react-native";
import { widthPercentageToDP as W, heightPercentageToDP as H } from "react-native-responsive-screen";

const OnboardingScreen3 = ({ navigation }) => {

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("WelcomeScreen");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <>
      <StatusBar hidden />

      {/* Center Circle */}
      <View style={{ alignItems: "center" }}>
        <Image
          source={require("../assets/Vector9.png")}
          style={{
            height: 450,
            width: 450,
            borderRadius: 100,
            bottom: 110,
          }}
        />
      </View>

      {/* Decorative Images */}

       <View style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: "row",
              top: 10,
              position: "absolute",
              height: H(25),
              width: W(40),
              left: 80
      
            }}>
              <View style={{
                left: 20
              }}>
                <Image
                  source={require("../assets/Vector2.png")}
                  style={{
                    height: H(2.5),
                    width: W(10),
                    resizeMode: 'contain',
      
                    bottom: 5,
                    position: "relative"
                  }}
                />
      
                <Image
                  source={require("../assets/Vector3.png")}
                  style={{
                    height: H(4),
                    width: W(15),
                    resizeMode: 'contain',
                    left: 15,
                    position: "relative",
                    bottom: 2
      
                  }}
                />
      
                <Image
                  source={require("../assets/Vector1.png")}
                  style={{
                    height: H(8),
                    width: W(20),
                    resizeMode: 'contain',
                    bottom: 22,
                    position: "relative"
      
                  }}
                />
              </View>
      
              <Image
                source={require("../assets/Vector4.png")}
                style={{
                  height: H(5),
                  width: W(10),
                  resizeMode: 'contain',
                  left: 10,
                  position: "relative",
      
                  bottom: 5
      
                }}
              />
              <Image
                source={require("../assets/Vector5.png")}
                style={{
                  height: H(3),
                  width: W(10),
                  resizeMode: 'contain',
                  position: "relative",
                  right: 3
      
      
                }}
              />
              <Image
                source={require("../assets/Vector6.png")}
                style={{
                  height: H(3),
                  width: W(10),
                  resizeMode: 'contain',
                  position: "relative",
                  right: 15
      
                }}
              />
              <Image
                source={require("../assets/Vector7.png")}
                style={{
                  height: H(4),
                  width: W(10),
                  resizeMode: 'contain',
                  right: 20,
                  bottom: 2,
                  position: "relative",
                  right: 35
      
      
                }}
              />
      
      
            </View>

            
      <Image
        source={require("../assets/it.png")}
        style={{
          height: H(13),
          width: W(10),
          resizeMode: "contain",
          position: "absolute",
          top: 45,
          right: 105,
        }}
      />

      <Image
        source={require("../assets/bag.png")}
        style={{
          height: H(15),
          width: W(20),
          position: "absolute",
          top: 180,
          left: 270,
        }}
      />

      <Image
        source={require("../assets/bike.png")}
        style={{
          height: H(36),
          width: W(92),
          position: "absolute",
          top: 150,
          right: 20,
        }}
      />

      {/* Text */}
      <View>
        <Text style={{ alignSelf: "center", fontSize: 20, fontWeight: "500" }}>
          Fast Delivery to your home
        </Text>

        <Text
          style={{
            opacity: 0.5,
            fontSize: 13,
            alignSelf: "center",
            marginTop: 10,
          }}
        >
          We make food ordering fast, simple and free —
        </Text>

        <Text
          style={{
            opacity: 0.5,
            fontSize: 13,
            alignSelf: "center",
          }}
        >
          no matter if you order online or cash
        </Text>
      </View>

      {/* Indicator */}
      <View
        style={{
          flexDirection: "row",
          gap: 10,
          alignSelf: "center",
          marginTop: 30,
        }}
      >
        <View
          style={{
            backgroundColor: "rgba(199, 87, 64, 1)",
            height: H(1.5),
            width: W(3),
            opacity: 0.4,
            borderRadius: H(20),
          }}
        />
        <View
          style={{
            backgroundColor: "rgba(199, 87, 64, 1)",
            height: H(1.5),
            width: W(3),
            opacity: 0.4,
            borderRadius: H(20),
          }}
        />
        <View
          style={{
            backgroundColor: "rgba(199, 87, 64, 1)",
            height: H(1.5),
            width: W(10),
            borderRadius: H(20),
          }}
        />
      </View>
    </>
  );
};

export default OnboardingScreen3;
