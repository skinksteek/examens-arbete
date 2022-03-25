import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Colors from '../styles/Colors';

export const EmptyScreen = ({navigation}) => {
  return (
    <View style={styles.body}>
      <Text>Sub Page Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: Colors.background,
    alignItems: 'center',
  },
});
export default EmptyScreen;
