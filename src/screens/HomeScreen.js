import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {globalStyling} from '../styles/global';
import {Colors} from '../styles/Colors';
import NewsList from '../components/NewsList';
import {Button} from '../components/Button';

export const HomeScreen = ({navigation}) => {
  return (
    <View style={globalStyling.default}>
      <View style={styles.body}>
        <Text>Senaste nyheter</Text>
        <NewsList
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
    backgroundColor: Colors.gray,
    alignItems: 'center',
  },
});

export default HomeScreen;
