import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {format} from 'date-fns';

export const Item = ({title, description, published}) => {
  const publishDate = new Date(published);
  const time = format(publishDate, 'MM/dd/yyyy');

  return (
    <View style={styles.article}>
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
  article: {
    flex: 1,
    height: 200,
    margin: 10,
    borderBottomWidth: 0.2,
  },
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
    padding: 5,
  },
});
