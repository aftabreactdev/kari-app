import React, { useEffect } from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
    TextInput,
    StatusBar
} from "react-native";
import { useNavigation } from "@react-navigation/native";
       
import {widthPercentageToDP as W, heightPercentageToDP as H} from 'react-native-responsive-screen';


const Splash = () => {

    const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("OnboadingScreen1");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);
  return (
    <>
      <StatusBar hidden={true} />
<View style={{
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection:"row",
  top:150
  
}}>
    <View >
  <Image
    source={require("../assets/Vector2.png")}
    style={{
      height: H(3),
      width: W(10),
      resizeMode: 'contain',
      right:5,
      bottom:5
    }}
  />

   <Image
    source={require("../assets/Vector3.png")}
    style={{
      height: H(5),
      width: W(15),
      resizeMode: 'contain',
      left:15
    }}
  />

   <Image
    source={require("../assets/Vector1.png")}
    style={{
      height: H(10),
      width: W(20),
      resizeMode: 'contain',
      bottom:30
    }}
  />
</View>

 <Image
    source={require("../assets/Vector4.png")}
    style={{
      height: H(7),
      width: W(10),
      resizeMode: 'contain',
      left:10,
      bottom:5
     
    }}
  />
   <Image
    source={require("../assets/Vector5.png")}
    style={{
      height: H(5),
      width: W(10),
      resizeMode: 'contain',
     
    }}
  />
   <Image
    source={require("../assets/Vector6.png")}
    style={{
      height: H(5),
      width: W(10),
      resizeMode: 'contain',
     
    }}
  />
   <Image
    source={require("../assets/Vector7.png")}
    style={{
      height: H(6),
      width: W(10),
      resizeMode: 'contain',
      right:20,
      bottom:5
     
    }}
  />


</View>


<View style={{
    opacity:0.3,
    position:"absolute",
    top:400
}}>
    <Image
  source={require("../assets/Vector1.png")}
  style={{
    width: W(45),
    height: H(25),
    transform: [{ rotate: '160deg' }],
    bottom:430,
    right:115  }}
/>

  <Image
  source={require("../assets/Vector2.png")}
  style={{
    width: W(20),
    height: H(11),
    bottom:450,
    left:50
    
     }}
/>

</View>


  <View  style={{
        opacity:0.4   

  }}>
 

   <Image
    source={require("../assets/Vector3.png")}
    style={{
      height: H(10),
      width: W(25),
      resizeMode: 'contain',
      
      top:18,
      
      opacity:0.4
    }}
  />

   <Image
    source={require("../assets/Vector1.png")}
    style={{
      height: H(20),
      width: W(60),
      resizeMode: 'contain',
      bottom:30,
      right:80,
          opacity:0.4   

    }}
  />
</View>


<View style={{
    position:"absolute",
    right:70,
    top:300
}}>
    <Image
  source={require("../assets/Circle.png")}
  style={{
    width: W(15),
    height: H(25),
    left: 70 }}
/>


</View>




    </>
  );
};

export default Splash;
