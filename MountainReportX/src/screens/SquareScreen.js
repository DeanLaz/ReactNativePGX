import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;
const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [blue, setBlue] = useState(0);
  const [green, setGreen] = useState(0);

  const setColor = (color, change) => {
    switch (color) {
      case "red":
        red + change > 255 || red + change < 0 ? null : setRed(red + change);
        return;
      case "blue":
        blue + change > 255 || blue + change < 0
          ? null
          : setBlue(blue + change);
        return;
      case "green":
        green + change > 255 || green + change < 0
          ? null
          : setGreen(green + change);
        return;
    }
  };
  return (
    <View>
      <Text>Create a Winter Color</Text>
      <ColorCounter
        onIncrease={() => setColor("red", +20)}
        onDecrease={() => setColor("red", -1 * 20)}
        color="Red"
      />
      <ColorCounter
        color="Blue"
        onIncrease={() => setColor("blue", +20)}
        onDecrease={() => setColor("blue", -20)}
      />
      <ColorCounter
        color="Green"
        onIncrease={() => setColor("green", +20)}
        onDecrease={() => setColor("green", -20)}
      />
      <View
        style={{
          height: 150,
          marginTop: 20,
          width: "100%",
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      />
    </View>
  );
};
const style = StyleSheet.create({});

export default SquareScreen;
