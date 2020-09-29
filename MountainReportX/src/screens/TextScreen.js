import { setWorldAlignment } from "expo/build/AR";
import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";

const onChangeText = (e) => {
  console.log(e);
  //   setText({ e.target.value });
};
const TextScreen = () => {
  const [text, setText] = useState();
  return (
    <View>
      <Text>Enter your favourite Mountain</Text>
      <TextInput
        style={style.inputStyle}
        onChangeText={(newValue) => setText(newValue)}
        value={text}
      />
      <Text>My Top Mountain Is: {text}</Text>
    </View>
  );
};
const style = StyleSheet.create({
  inputStyle: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
  },
});

export default TextScreen;
