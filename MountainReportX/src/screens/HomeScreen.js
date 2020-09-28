import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>MountainReportX</Text>
      <Button
        onPress={() => navigation.navigate("Components")}
        title="View Components"
      />
      <Button title="View Lists" onPress={() => navigation.navigate("List")} />
      <Button
        title="Mountain Info"
        onPress={() => navigation.navigate("Image")}
      />
      <Button
        title="Ski Lift Counter"
        onPress={() => navigation.navigate("Counter")}
      />
      <Button
        title="Random Winter Colors"
        onPress={() => navigation.navigate("Color")}
      />
      <Button
        title="Create Winter Color"
        onPress={() => navigation.navigate("Square")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 22,
    textAlign: "center",
    padding: 10,
  },
});

export default HomeScreen;
