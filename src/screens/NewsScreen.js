import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const NewsScreen = ({navigation}) => {
  return (
    <View style={styles.body}>
      <Text style={styles.header}>Nyheter från Soleil</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  header: {
    fontWeight: 'bold',
    fontSize: 30,
  },
});

export default NewsScreen;
