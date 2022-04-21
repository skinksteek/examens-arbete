import React from 'react';
import {View, Text} from 'react-native';
import {globalStyling, textStyling} from '../styles/global';
import NewsList from '../components/NewsList';
import {Button} from '../components/Button';

export const HomeScreen = ({navigation}) => {
  return (
    <View style={globalStyling.default_view}>
      <View style={globalStyling.flex}>
        <Text style={textStyling.headerM}>Senaste nyheter</Text>
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

export default HomeScreen;
