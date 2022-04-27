import React from 'react';
import {LogBox} from 'react-native';
import Navigator from './src/screens/Navigator';
import 'react-native-gesture-handler';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

function App() {
  return <Navigator />;
}

export default App;
