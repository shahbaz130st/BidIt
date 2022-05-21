import "react-native-gesture-handler"
import React, { useEffect } from 'react'
import { LogBox } from 'react-native';

// ----------------------------------------------
import MainStack from './src/Stacks/MainStack'


// LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
// LogBox.ignoreAllLogs();

const App = () => {

  return (
    <MainStack />
  );
}

export default App

