import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const Header = (props) => {
  const {textStyle, viewStyle} = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#88527F',
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    paddingTop: 40,
    borderBottomWidth: 2,
    borderColor: 'salmon',
    shadowColor: 'white',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.4,
    elevation: 4,
    position: 'relative',
    borderRadius: 15,
    marginBottom: -15,
    zIndex: 10,
  },
  textStyle: {
    fontWeight: '600',
    color: 'white',
    fontSize: 34,
  },
};

export default Header;
