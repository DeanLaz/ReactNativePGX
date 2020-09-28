import React from "react";
import { Text, StyleSheet, View, Button, Image } from "react-native";

const ImageDetail = ({ title, img, height }) => {
  return (
    <View>
      <Image style={styles.imgStyle} source={img} />
      <Text style={styles.textStyle}>Location: {title}</Text>
      <Text style={styles.textStyle}>Height: {height}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  imgStyle: {
    height: 150,
    width: 150,
  },
  textStyle: {
    fontSize: 16,
    borderWidth: 2,
    borderBottomColor: "black",
  },
});

export default ImageDetail;
