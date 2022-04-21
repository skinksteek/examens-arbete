import React from 'react';
import {View, Text} from 'react-native';
import NewsList from '../components/NewsList';
import {globalStyling, textStyling} from '../styles/global';

export const NewsScreen = () => {
  return (
    <View style={globalStyling.flex}>
      <Text style={textStyling.headerL}>Nyheter från Soleil</Text>
      <NewsList size="medium" />
    </View>
  );
};

export default NewsScreen;
