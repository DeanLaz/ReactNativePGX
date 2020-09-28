import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>
        Welcome to Deans First React Native Project...
      </Text>
      <Button
        onPress={() => navigation.navigate("Components")}
        title="View Components"
      />
      <Button title="View Lists" onPress={() => navigation.navigate("List")} />
      <Button
        title="View Images"
        onPress={() => navigation.navigate("Image")}
      />
      <Button
        title="View Counter"
        onPress={() => navigation.navigate("Counter")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
  },
});

export default HomeScreen;
