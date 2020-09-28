import React, { useReducer } from "react";
import { Text, StyleSheet, View } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;
const SquareScreen = () => {
  const reducer = (state, action) => {
    // state = {red: 0, blue: 0, green}
    // action = {colorToChange: red or green or blue, amount: +15 or -15}

    switch (action.colorToChange) {
      case "red":
        return { ...state, red: state.red + action.amount };
      case "green":
        return { ...state, green: state.green + action.amount };
      case "blue":
        return { ...state, blue: state.blue + action.amount };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, { red: 0, blue: 0, green: 0 });

  return (
    <View>
      <Text>Create a Winter Color</Text>
      <ColorCounter
        onIncrease={() => dispatch({ colorToChange: "red", amount: 20 })}
        onDecrease={() => dispatch({ colorToChange: "red", amount: -20 })}
        color="Red"
      />
      <ColorCounter
        color="Blue"
        onIncrease={() => dispatch({ colorToChange: "blue", amount: 20 })}
        onDecrease={() => dispatch({ colorToChange: "blue", amount: -20 })}
      />
      <ColorCounter
        color="Green"
        onIncrease={() => dispatch({ colorToChange: "green", amount: 20 })}
        onDecrease={() => dispatch({ colorToChange: "green", amount: -20 })}
      />
      <View
        style={{
          height: 150,
          marginTop: 20,
          width: "100%",
          backgroundColor: `rgb(${state.red},${state.green},${state.blue})`,
        }}
      />
    </View>
  );
};
const style = StyleSheet.create({});

export default SquareScreen;

//   const [red, setRed] = useState(0);
//   const [blue, setBlue] = useState(0);
//   const [green, setGreen] = useState(0);

//   const setColor = (color, change) => {
//     switch (color) {
//       case "red":
//         red + change > 255 || red + change < 0 ? null : setRed(red + change);
//         return;
//       case "blue":
//         blue + change > 255 || blue + change < 0
//           ? null
//           : setBlue(blue + change);
//         return;
//       case "green":
//         green + change > 255 || green + change < 0
//           ? null
//           : setGreen(green + change);
//         return;
//     }
//   };
