import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import CategoryCard from "../components/CategoryCard";
import sanityClient from "../sanity";

import { urlFor } from "../sanity";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
      *[_type == "category"]
      `
      )
      .then((data) => {
        setCategories(data);
      });
  }, []);

  console.table(categories);

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

      {categories.map((category) => (
        <CategoryCard
          key={category._id}
          title={category.title}
          imgUrl={urlFor(category.image).width(200).url()}
        />
      ))}
    </ScrollView>
  );
};

export default Categories;
