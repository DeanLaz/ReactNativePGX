import React from "react";
import { Text, StyleSheet, View } from "react-native";
const ComponentScreen = () => {
  const Header = "Native Practice";
  return (
    <View>
      <Text style={styles.Header}>{Header}</Text>
      <Text style={styles.textStyle}>Component Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Header: {
    fontSize: 32,
    textAlign: "center",
  },
  textStyle: {
    fontSize: 18,
    textAlign: "center",
  },
});
export default ComponentScreen;
