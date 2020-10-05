import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const Header = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>Albums</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: 'salmon',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 30,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
  },
  textStyle: {
    fontSize: 20,
  },
};

export default Header;
