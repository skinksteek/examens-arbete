import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import List from '../components/List';
import Colors from '../styles/Colors';

export const NewsScreen = ({navigation}) => {
  return (
    <View style={styles.body}>
      <Text style={styles.header}>Nyheter från Soleil</Text>
      <List />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: Colors.gray,
    alignItems: 'center',
  },
  header: {
    fontWeight: 'bold',
    fontSize: 30,
  },
});

export default NewsScreen;
