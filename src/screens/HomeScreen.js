import * as React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.body}>
      <Text>Home Screen</Text>
      <Button
        title="Gå till nyheter"
        onPress={() => navigation.navigate('News')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});

export default HomeScreen;
