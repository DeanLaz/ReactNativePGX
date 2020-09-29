import React, { useReducer } from "react";
import { Text, StyleSheet, View } from "react-native";
import ColorCounter from "../components/ColorCounter";

const SquareScreen = () => {
  const reducer = (state, action) => {
    // state = {red: 0, blue: 0, green}
    // action = {type: red or green or blue, payload: +15 or -15}

    switch (action.type) {
      case "change_red":
        return state.red + action.payload > 255 ||
          state.red + action.payload < 0
          ? state
          : { ...state, red: state.red + action.payload };
      case "change_green":
        return state.green + action.payload > 255 ||
          state.green + action.payload < 0
          ? state
          : { ...state, green: state.green + action.payload };
      case "change_blue":
        return state.blue + action.payload > 255 ||
          state.blue + action.payload < 0
          ? state
          : { ...state, blue: state.blue + action.payload };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, { red: 0, blue: 0, green: 0 });

  return (
    <View>
      <Text>Create a Winter Color</Text>
      <ColorCounter
        onIncrease={() => dispatch({ type: "change_red", payload: 20 })}
        onDecrease={() => dispatch({ type: "change_red", payload: -20 })}
        color="Red"
      />
      <ColorCounter
        color="Blue"
        onIncrease={() => dispatch({ type: "change_blue", payload: 20 })}
        onDecrease={() => dispatch({ type: "change_blue", payload: -20 })}
      />
      <ColorCounter
        color="Green"
        onIncrease={() => dispatch({ type: "change_green", payload: 20 })}
        onDecrease={() => dispatch({ type: "change_green", payload: -20 })}
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
