import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import * as Animatable from "react-native-animatable";
import LottieView from "lottie-react-native";
import { TouchableOpacity } from "react-native";

const PreparingOrderScreen = () => {
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
        <Text className="text-lg font-bold text-white text-center">
          We are preparing your meal. Hang tight!!
        </Text>
      </Animatable.View>
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;
