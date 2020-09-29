import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.header}>MountainReportX</Text>
      <View style={styles.text}>
        <Button
          onPress={() => navigation.navigate("Components")}
          title="View Components"
        />
        <Button
          title="View Lists"
          onPress={() => navigation.navigate("List")}
        />
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
          style={{ borderWidth: 4, borderColor: "black" }}
          title="Create Winter Color"
          onPress={() => navigation.navigate("Square")}
        />
        <Button
          style={{ borderWidth: 4, borderColor: "black" }}
          title="Winter Themed Text"
          onPress={() => navigation.navigate("Text")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 22,
    alignItems: "flex-start",
    padding: 10,
    borderWidth: 2,
    borderColor: "black",
  },
  header: {
    fontSize: 22,
    textAlign: "center",
    alignItems: "center",
    padding: 10,
  },
});

export default HomeScreen;
