import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const Item = ({title, description, published}) => {
  return (
    <View style={styles.article}>
      <Text style={styles.title}>{title} </Text>
      <Text style={styles.desc}>{description} </Text>
      <Text style={styles.publish}>Publicerad: {published} </Text>
    </View>
  );
};

export default Item;

const styles = StyleSheet.create({
  article: {
    flex: 1,
    height: 150,
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
