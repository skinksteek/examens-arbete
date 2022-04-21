import React from 'react';
import {View, Text} from 'react-native';
import {globalStyling} from '../styles/global';

export const WidePageScreen = () => {
  return (
    <View style={globalStyling.default_view}>
      <Text>Wide Page Screen</Text>
    </View>
  );
};

export default WidePageScreen;
