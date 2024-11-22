import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const CategoryCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity className="mr-2 bg-sky-200 border border-gray-300 flex-row max-w-24 max-h-24 items-center overflow-hidden rounded">
      <View className="w-14 h-24">
        <Text className="text-gray-600 text-xs ml-2 mt-[65px]">{title}</Text>
      </View>
      <Image
        className="w-32 h-32 -ml-3 -mt-2 -rotate-12"
        source={{
          uri: imgUrl,
        }}
        resizeMode="cover"
      />
    </TouchableOpacity>
  );
};

export default CategoryCard;
