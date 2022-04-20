import React from 'react';
import Menu from '../components/Menu';
import ClickableArticle from './ClickableArticle';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import NewsScreen from './NewsScreen';
import Colors from '../styles/Colors';
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
        <Stack.Screen
          name="Nyheter"
          component={NewsScreen}
          options={{
            headerStyle: {
              backgroundColor: Colors.orange,
            },
          }}
        />
        <Stack.Screen
          name="Clickable"
          component={ClickableArticle}
          options={{
            headerStyle: {
              backgroundColor: Colors.orange,
            },
          }}
        />
        <Stack.Screen
          name="Subpage"
          component={SubPageScreen}
          options={{
            headerStyle: {
              backgroundColor: Colors.orange,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Screenstack;
