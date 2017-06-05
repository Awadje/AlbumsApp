import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const Button = () => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity style={buttonStyle}>
      <Text style={textStyle}>
      Click me!!
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },

  buttonStyle: {
    flex: 1,
    height: 36,
    backgroundColor: '#007aff',
    borderColor: '#007aff',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
};

export default Button;
