import React from 'react';
import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import Colors from '../styles/Colors';

const width = Dimensions.get('window').width;

export const Button = ({
  text,
  onPress,
  type = 'filled',
  bordered = false,
  size = 'large',
}) => {
  const large = width / 1.3;
  const small = width / 2.5;
  const btnSize = size === 'large' ? large : small;
  const btnBgColor = type === 'filled' ? Colors.orange : Colors.white;
  const btnTextColor = type === 'filled' ? Colors.black : Colors.orange;
  const btnBorderRadius = bordered ? 30 : 5;

  const containerStyles = {
    backgroundColor: btnBgColor,
    paddingVertical: 8,
    margin: 10,
    width: btnSize,
    borderRadius: btnBorderRadius,
    alignSelf: 'center',
  };

  const textStyles = {
    color: btnTextColor,
    fontSize: 16,
    textAlign: 'center',
  };

  const border = type === 'outlined' && {
    borderColor: Colors.orange,
    borderWidth: 2,
  };

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <View style={[containerStyles, border]}>
        <Text style={[textStyles]}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
