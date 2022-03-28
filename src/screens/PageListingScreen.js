import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Colors from '../styles/Colors';

export const PageListingScreen = ({navigation}) => {
  return (
    <View style={styles.body}>
      <Text>PageListingScreen</Text>
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
export default PageListingScreen;
