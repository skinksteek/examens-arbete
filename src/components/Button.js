import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Colors from '../styles/Colors';

export const Button = ({text}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Nyheter')}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 50,
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 10,
    elevation: 3,
    backgroundColor: Colors.orange,
  },
  buttonText: {
    fontSize: 16,
    textAlign: 'center',
    color: Colors.black,
  },
});
export default Button;
