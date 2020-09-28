import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";

const ListScreen = () => {
  const myFriends = [
    {
      name: "friend",
      age: "20",
    },
    {
      name: "friend1",
      age: "20",
    },
    {
      name: "friend2",
      age: "20",
    },
    {
      name: "friend3",
      age: "20",
    },
    {
      name: "friend4",
      age: "20",
    },
    {
      name: "friend5",
      age: "20",
    },
  ];
  return (
    <FlatList
      //   horizontal
      //   showsHorizontalScrollIndicator={false}
      keyExtractor={(friend) => friend.name}
      data={myFriends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name}
            {" is " + item.age + " years-old"}
          </Text>
        );
      }}
    />
  );
};
const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 10,
  },
});

export default ListScreen;

// import React from "react";
// import { Text, StyleSheet, View } from "react-native";

// const ListScreen = () => {
//   return (
//     <View>
//       <Text></Text>
//     </View>
//   );
// };
// const style = StyleSheet.create({});

// export default ListScreen;
