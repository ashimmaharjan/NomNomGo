import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "../components/CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {/* Categories Cards */}
      <CategoryCard title="Test 1" imgUrl="https://links.papareact.com/wru" />
      <CategoryCard title="Test 2" imgUrl="https://links.papareact.com/wru" />
      <CategoryCard title="Test 3" imgUrl="https://links.papareact.com/wru" />
    </ScrollView>
  );
};

export default Categories;
