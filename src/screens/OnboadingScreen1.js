import React from "react";
import { View, Image, StatusBar, Text, Touchable, TouchableOpacity } from "react-native";
import { widthPercentageToDP as W, heightPercentageToDP as H } from "react-native-responsive-screen";
import OnboardingIndicator from "../components/OnboardingIndicator"



const OnboardingScreen1 = ({ navigation }) => {

  return (
    <>
      <StatusBar hidden={true} />

      {/* Center Circle */}
      <View
        style={{
          alignItems: "center",
        }}
      >
        <Image
          source={require("../assets/Vector8.png")}
          style={{
            height: 400,
            width: 400,
            borderRadius: 200,
            alignSelf: "center",
            bottom: 110,
          }}
        />
      </View>


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
        source={require("../assets/food.png")}
        style={{
          height: H(15),
          width: W(20),
          resizeMode: 'contain',
          right: 70,
          position: "absolute",
          top: 40,






        }}
      />
     

      <Image source={require("../assets/Group.png")} style={{
        height: H(30),
        width: W(40),
        position: "absolute",
        top: 150,
        left: 90,


      }} />

      <View>
        <Text style={{
          alignSelf: "center",
          fontSize: 20,
          fontWeight: "500"
        }}>Get your Favourite Food!</Text>

        <Text style={{
          opacity: 0.5,
          fontSize: 13,
          alignSelf: "center",
          top: 10
        }}>
          When you oder Eat Steet, we’ll hook you up with</Text>

        <Text style={{
          opacity: 0.5,
          fontSize: 13,
          alignSelf: "center",
          top: 10
        }}> exclusive coupon, specials and rewards</Text>

      </View>

      <OnboardingIndicator step={1} />

      <View style={{
        flexDirection: "row",

      }}>
        <TouchableOpacity onPress={() => navigation.navigate("OnboadingScreen3")}>
          <Text
            style={{
              opacity: 0.6,
              top: 70,
              left: 20
            }}
          >
            Skip</Text>
        </TouchableOpacity>

        <TouchableOpacity 
        onPress={() => navigation.navigate("OnboadingScreen2")}
        style={{
          backgroundColor: "rgba(199, 87, 64, 1)",
          height: H(6),
          width: W(30),
          borderRadius: 8,
          top: 60,
          left: 180

        }}>
          <Text style={{
            color: "white",
            textAlign: "center",
            textAlignVertical: "center",
            fontSize: 15,
            paddingTop: 5
          }}>Next</Text>

        </TouchableOpacity>
      </View>



















    </>
  );
};

export default OnboardingScreen1;
