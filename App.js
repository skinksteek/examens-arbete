import React from 'react';
import {LogBox} from 'react-native';
import Screenstack from './src/screens/Screenstack';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

function App() {
  return <Screenstack />;
}

export default App;
