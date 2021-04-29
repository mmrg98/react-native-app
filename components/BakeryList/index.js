import React from "react";
import { Text } from "react-native";

const BakeryItem = ({ bakery }) => {
  return <Text>{bakery.name}</Text>;
};

export default BakeryItem;