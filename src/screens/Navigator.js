import React from 'react';
import Menu from '../components/Menu';
import ClickableArticle from './ClickableArticle';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import NewsScreen from './NewsScreen';
import SubPageScreen from './SubPageScreen';

const Stack = createStackNavigator();
export const Screenstack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Menu"
          component={Menu}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Nyheter" component={NewsScreen} />
        <Stack.Screen name="Clickable" component={ClickableArticle} />
        <Stack.Screen name="Subpage" component={SubPageScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Screenstack;
