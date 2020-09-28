import React from "react";
import { Text, StyleSheet, View, Button, FlatList } from "react-native";

const randomRgb = () => {
  const red = Math.floor(Math.random() * 30 + 60);
  const blue = Math.floor(Math.random() * 60 + 90);
  const green = Math.floor(Math.random() * 40 + 70);
  return `rgb(${red},${green},${blue})`;
};

const ColorScreen = () => {
  const [colors, setColors] = React.useState([]);
  return (
    <View>
      <Button
        title="Generate Random Winter Colors"
        onPress={() => setColors([...colors, randomRgb()])}
      />
      <Button title="Reset Colors" onPress={() => setColors([])} />
      <FlatList
        keyExtractor={(item) => item}
        data={colors}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                alignItems: "center",
                textAlign: "center",
                height: 100,
                width: "100%",
                backgroundColor: randomRgb(),
              }}
            />
          );
        }}
      />
    </View>
  );
};
const style = StyleSheet.create({
  colorStyle: {
    textAlign: "center",
    height: 100,
    width: 100,
    backgroundColor: randomRgb(),
  },
});

export default ColorScreen;
