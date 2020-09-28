import React from "react";
import { Text, StyleSheet, View } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title="Mt. Tsurugi"
        img={require("../../assets/Tsu.jpg")}
        height="12,400"
      />
      <ImageDetail
        title="Mammoth Mountain"
        height="13,000"
        img={require("../../assets/Mammoth.jpg")}
      />
      <ImageDetail
        title="Whistler"
        img={require("../../assets/Unnamed.jpg")}
        height="14,400"
      />
    </View>
  );
};
const style = StyleSheet.create({});

export default ImageScreen;
