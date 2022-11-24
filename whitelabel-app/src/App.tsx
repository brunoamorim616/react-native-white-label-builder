import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import Routes from './routes';
import {NativeBaseProvider} from 'native-base';

function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App;
