import React, { useState } from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);

  // const handleCount = (e) => {
  //   console.log(e.title);
  //   if (e.target.Text == "increase") setCounter(counter++);
  //   if (e.target.title == "decrease") setCounter(counter--);
  // };
  return (
    <View>
      <Text>Keep Track of Your Ski Lifts!</Text>
      <Button
        title="increase"
        onPress={() => {
          setCounter(counter + 1);
        }}
        // onPress={(e) => handleCount(e)}
      />
      <Button
        title="decrease"
        onPress={() => {
          setCounter(counter - 1);
        }}
      />
      <Text>Current Ski Lift Count: {counter}</Text>
    </View>
  );
};
const style = StyleSheet.create({});

export default CounterScreen;
