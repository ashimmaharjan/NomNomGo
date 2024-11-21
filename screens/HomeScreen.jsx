import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import sanityClient from "../sanity";

import {
  AdjustmentsVerticalIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from "react-native-heroicons/outline";
import Categories from "./Categories";
import FeaturedRow from "../components/FeaturedRow";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    sanityClient
      .fetch(
        `
      *[_type == "featured"] {
      ...,
      restaurants[] -> {
        ...,
        dishes[] ->
        }
      }
        `
      )
      .then((data) => {
        setFeaturedCategories(data);
      });
  }, []);

  console.log(featuredCategories);

  return (
    <SafeAreaView>
      <ScrollView className="bg-white py-3 px-2">
        {/* Header */}
        <View className="flex-row pb-3 items-center mx-4 gap-2">
          <Image
            source={{ uri: "https://links.papareact.com/wru" }}
            className="w-10 h-10 bg-gray-300 p-4 rounded-full"
          />

          <View className="flex-1">
            <Text className="font-bold text-gray-400 text-xs">
              Deliver Now!
            </Text>
            <View className="flex-row items-center gap-1">
              <Text className="font-bold text-xl text-gray-700">
                Current Location
              </Text>
              <Text className="mt-1">
                <ChevronDownIcon size={20} color="#00CCBB" />
              </Text>
            </View>
          </View>

          <UserIcon size={35} color="#00CCBB" />
        </View>

        {/* Search */}
        <View className="flex-row items-center space-x-2 pb-2 mx-4">
          <View className="flex-row space-x-2 flex-1 bg-gray-200 p-3 rounded-lg drop-shadow">
            <MagnifyingGlassIcon color="gray" />
            <TextInput
              className="w-full px-2 outline-none border-collapse text-gray-600"
              placeholder="Restaurants and Cuisines"
              keyboardType="default"
            />
          </View>
          <AdjustmentsVerticalIcon color="#00CCBB" />
        </View>

        {/* Body */}
        <ScrollView
          className="bg-gray-100"
          contentContainerStyle={{
            paddingBottom: 100,
          }}
        >
          {/* Categories */}
          <Categories />

          {/* Featured Rows */}

          {featuredCategories?.map((category) => (
            <FeaturedRow
              key={category._id}
              id={category._id}
              title={category.name}
              description={category.short_description}
            />
          ))}
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
