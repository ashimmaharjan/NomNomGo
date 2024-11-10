import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const CategoryCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity>
      <Image
        className="w-20 h-20 rounded"
        source={{
          uri: imgUrl,
        }}
      />
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
