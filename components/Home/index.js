import React from "react";

// Styling
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

const Home = () => {
  return <ImageBackground
  style={{ flex: 1, width: "100%", height: "100%" }}
  source={{
    uri:
      "https://annabanana.co/wp-content/uploads/2020/03/Chocolate-Chip-Cookies-22.jpg",
  }}
>
  <View
    style={{ height: "40%", alignItems: "center", justifyContent: "center" }}
  >
    <Text style={{ color: "#fff", fontSize: 38, textAlign: "center" }}>
      Cookies and Beyond
    </Text>
  </View>
</ImageBackground>;
};

export default Home;