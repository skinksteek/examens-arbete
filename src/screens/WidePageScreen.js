import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Colors from '../styles/Colors';

export const WidePageScreen = ({navigation}) => {
  return (
    <View style={styles.body}>
      <Text>Sub Page Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: Colors.gray,
    alignItems: 'center',
  },
});
export default WidePageScreen;
