import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import NewsList from '../components/NewsList';
import Colors from '../styles/Colors';

export const NewsScreen = ({navigation}) => {
  return (
    <View style={styles.body}>
      <Text style={styles.header}>Nyheter från Soleil</Text>
      <NewsList size="medium" />
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
    margin: 10,
  },
});

export default NewsScreen;
