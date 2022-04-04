import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {globalStyles} from '../styles/global';
import {Colors} from '../styles/Colors';
import List from '../components/List';
import {Button} from '../components/Button';

export const HomeScreen = ({navigation}) => {
  // const [data, setData] = useState();
  return (
    <View style={globalStyles.container}>
      <View style={styles.body}>
        <Text>Senaste nyheter</Text>
        <List
          maxNewsToShow={3}
          size="medium"
          navigation={navigation}
          ListFooterComponent={
            <Button
              text="Fler nyheter"
              onPress={() => navigation.navigate('Nyheter')}
              bordered
              size="small"
              type="filled"
            />
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    marginBottom: 40,
    backgroundColor: Colors.gray,
    alignItems: 'center',
  },
});

export default HomeScreen;
