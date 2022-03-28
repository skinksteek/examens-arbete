import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Colors from '../styles/Colors';

export const Button = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        title="Fler nyheter"
        onPress={() => navigation.navigate('Nyheter')}>
        <Text>Press Here</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 1,
  },
  button: {
    alignItems: 'center',
    backgroundColor: Colors.orange,
    padding: 10,
  },
});
export default Button;
