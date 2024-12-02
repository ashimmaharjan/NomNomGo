import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectRestaurant } from "../features/restaurantSlice";
import {
  ChatBubbleOvalLeftIcon,
  PhoneIcon,
  XMarkIcon,
} from "react-native-heroicons/solid";
import * as Progress from "react-native-progress";
import MapView, { Marker } from "react-native-maps";

const DeliveryScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);

  return (
    <View className="bg-[#00ccbb] flex-1">
      <SafeAreaView className="z-50">
        <View className="flex-row justify-between items-center p-5">
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <XMarkIcon color="white" size={30} />
          </TouchableOpacity>

          <Text className="font-light text-white text-lg">Order Help</Text>
        </View>

        <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 drop-shadow-md">
          <View className="flex-row justify-between">
            <View>
              <Text className="text-lg text-gray-400">Estimated Arrival</Text>
              <Text className="text-4xl font-bold text-gray-800">
                30-45 Minutes
              </Text>
            </View>

            <Image
              className="h-20 w-20"
              source={{ uri: "https://links.papareact.com/fls" }}
            />
          </View>

          <Progress.Bar color="#00ccbb" indeterminate={true} />

          <Text className="mt-3 text-gray-500">
            Your order at
            <Text className="font-semibold"> {restaurant.title} </Text>
            is being prepared.
          </Text>
        </View>
      </SafeAreaView>

      <View className="flex-1 -mt-10 z-0">
        <MapView
          initialRegion={{
            latitude: restaurant.lat,
            longitude: restaurant.long,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
          style={{ width: "100%", height: "100%" }}
          mapType="mutedStandard"
        >
          <Marker
            coordinate={{
              latitude: restaurant.lat,
              longitude: restaurant.long,
            }}
            title={restaurant.title}
            description={restaurant.short_description}
            identifier="origin"
            pinColor="#00ccbb"
          />
        </MapView>
      </View>

      <SafeAreaView className="bg-white h-28">
        <View className="flex-row items-center gap-x-5 h-28 px-5 -mt-2">
          <Image
            source={{
              uri: "https://thumbs.dreamstime.com/b/food-delivery-man-riding-green-motorcycle-line-art-shipping-fast-icon-symbol-vector-illustration-324842041.jpg",
            }}
            className="h-12 w-12 bg-gray-300 p-2 rounded-full"
            resizeMode="contain"
          />

          <View className="flex-1">
            <Text className="text-lg">John Doe</Text>
            <Text className="text-gray-400">Your Rider</Text>
          </View>

          <View className="flex-row gap-3 items-center">
            <PhoneIcon size={30} color="#00ccbb" />
            <ChatBubbleOvalLeftIcon size={30} color="#00ccbb" />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default DeliveryScreen;
