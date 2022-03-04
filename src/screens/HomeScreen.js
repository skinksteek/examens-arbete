import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import fetchFunction from '../api';

export const HomeScreen = ({navigation}) => {
  const [data, setData] = useState();
  return (
    <View style={styles.body}>
      <Text>Home Screen</Text>
      <Button
        title="Gå till nyheter"
        onPress={() => navigation.navigate('Nyheter')}
      />
      <Button
        title="Fetch"
        onPress={async () => {
          const response = await fetchFunction(
            'http://linus.labb.soleilit.se/rest-api/1/0/3.484d9c7317ce4f0e1b69ed/nodes',
            'get',
          );
          setData(response);
        }}
      />
      <Text>{JSON.stringify(data)}</Text>
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
