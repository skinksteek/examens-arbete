import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {format} from 'date-fns';
import Colors from '../styles/Colors';
import {textStyling} from '../styles/global';

export const NewsItem = ({title, description, published, size, id}) => {
  const navigation = useNavigation();
  const sizes = {
    large: 300,
    medium: 200,
    small: 125,
  };

  const artSize = sizes[size] || sizes.medium;

  const properties = {
    borderColor: Colors.orange,
    backgroundColor: Colors.white,
    borderRadius: 4,
  };

  const articleStyles = {
    height: artSize,
    flex: 1,
    margin: 10,
    borderWidth: 2,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 4,
    elevation: 3,
  };

  const publishDate = new Date(published);
  const time = format(publishDate, 'MM/dd/yyyy');

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Clickable', {
          id: id,
        });
      }}>
      <View style={[articleStyles, properties]}>
        <Text numberOfLines={2} style={textStyling.title}>
          {title}
        </Text>
        <Text numberOfLines={3} style={textStyling.desc}>
          {description}
        </Text>
        <Text style={textStyling.publish}>Publicerad: {time} </Text>
      </View>
    </TouchableOpacity>
  );
};

export default NewsItem;
