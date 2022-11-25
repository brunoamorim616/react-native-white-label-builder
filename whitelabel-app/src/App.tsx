import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import Routes from './routes';
import {Provider} from 'react-native-paper';

export default function App() {
  return (
    <Provider>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </Provider>
  );
}
