import React from 'react';
import Menu from './src/components/Menu';
import ClickableArticle from './src/screens/ClickableArticle';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {LogBox} from 'react-native';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);
import NewsScreen from './src/screens/NewsScreen';
import Colors from './src/styles/Colors';

const Stack = createStackNavigator();

function App() {
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
