import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {format} from 'date-fns';
import Colors from '../styles/Colors';

export const Item = ({title, description, published, size}) => {
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
    <View style={[articleStyles, properties]}>
      <Text numberOfLines={2} style={styles.title}>
        {title}
      </Text>
      <Text numberOfLines={3} style={styles.desc}>
        {description}
      </Text>
      <Text style={styles.publish}>Publicerad: {time} </Text>
    </View>
  );
};

export default Item;

const styles = StyleSheet.create({
  title: {
    fontWeight: '500',
    fontSize: 25,
    padding: 10,
  },
  desc: {
    fontSize: 16,
    fontWeight: '500',
    padding: 10,
  },
  publish: {
    fontSize: 13,
    fontWeight: '400',
    position: 'absolute',
    bottom: 10,
    left: 20,
  },
});
