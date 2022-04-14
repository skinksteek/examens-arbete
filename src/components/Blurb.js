import React from 'react';
import {View, Text, TouchableOpacity, Linking} from 'react-native';

export const Blurb = ({title, description, url}) => {
  return (
    <View>
      <Text>{title}</Text>
      <Text>{description}</Text>
      <TouchableOpacity
        onPress={() => {
          Linking.openURL(`${url}`);
        }}>
        <Text>Läs mer</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Blurb;
