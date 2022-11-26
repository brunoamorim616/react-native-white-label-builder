import React, {useState} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-native-paper';
import Routes from './routes';
import Auth from './authentication';

export default function App() {
  const [auth, setAuth] = useState(false);

  return (
    <Provider>
      <NavigationContainer>{!auth ? <Auth /> : <Routes />}</NavigationContainer>
    </Provider>
  );
}
