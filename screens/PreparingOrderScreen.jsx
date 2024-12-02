import { View, Text, SafeAreaView } from "react-native";
import React, { useEffect } from "react";
import * as Animatable from "react-native-animatable";
import LottieView from "lottie-react-native";
import * as Progress from "react-native-progress";
import { useNavigation } from "@react-navigation/native";

const PreparingOrderScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivery");
    }, 4000);
  }, []);

  return (
    <SafeAreaView className="bg-[#00ccbb] flex-1 justify-center items-center">
      <Animatable.View
        animation="fadeInDown"
        iterationCount={1}
        easing="ease-in-out"
      >
        <LottieView
          autoPlay
          style={{
            width: 350,
            height: 350,
          }}
          source={require("../assets/prep-food.json")}
        />
      </Animatable.View>

      <Animatable.View
        animation="fadeInLeft"
        iterationCount={1}
        easing="ease-in-out"
      >
        <Text className="text-lg font-semibold text-gray-700 text-center -mt-5">
          We are placing & preparing your order. Hang tight!!
        </Text>
      </Animatable.View>

      <Progress.Circle
        className="mt-5"
        size={60}
        indeterminate={true}
        color="white"
      />
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;
