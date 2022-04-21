import React from 'react';
import {Text} from 'react-native';
import {textStyling} from '../styles/global';

export const TextModule = ({properties, name}) => {
  const textSizes = {
    rubrik: 32,
    ingress: 16,
    innehåll: 12,
  };

  const font = {
    fontSize: textSizes[name.toLowerCase()],
  };

  return (
    <Text style={[font, textStyling.simpletext]}>{properties.textContent}</Text>
  );
};

export default TextModule;
