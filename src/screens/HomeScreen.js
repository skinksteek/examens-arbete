import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colors} from '../styles/Colors';
// import fetchFunction from '../api';
import List from '../components/List';
import {Button} from '../components/Button';

export const HomeScreen = ({navigation}) => {
  // const [data, setData] = useState();
  return (
    <View style={styles.body}>
      <Text>Senaste nyheter</Text>
      <List maxNewsToShow={3} />
      <Button />
      {/* <Button
        title="Fetch"
        onPress={async () => {
          const response = await fetchFunction(
            'http://linus.labb.soleilit.se/rest-api/1/0/3.484d9c7317ce4f0e1b69ed/nodes',
            'get',
          );
          setData(response);
        }}
      />
      <Text>{JSON.stringify(data)}</Text> */}
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

export default HomeScreen;
