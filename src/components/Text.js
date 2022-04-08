import React from 'react';
import {Text, StyleSheet} from 'react-native';
import Colors from '../styles/Colors';

export const TextModule = ({properties, name}) => {
  const textSizes = {
    rubrik: 32,
    ingress: 16,
    innehåll: 12,
  };

  const font = {
    fontSize: textSizes[name.toLowerCase()],
  };

  return <Text style={[font, styles.text]}>{properties.textContent}</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: Colors.black,
    flex: 1,
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 15,
    paddingTop: 5,
  },
});

export default TextModule;
