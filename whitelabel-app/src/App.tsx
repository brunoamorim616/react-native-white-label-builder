import React, {useMemo} from 'react';

import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {Provider} from 'react-native-paper';
import {useColorScheme} from 'react-native';
import Routes from './routes';
import Auth from './modules/authentication';

function Root() {
  const auth = false;

  if (auth) return <Routes />;
  else return <Auth />;
}

export default function App() {
  const osColorScheme = useColorScheme();

  const appTheme = useMemo(() => {
    if (osColorScheme === 'dark') return DarkTheme;
    else return DefaultTheme;
  }, [osColorScheme]);

  return (
    <NavigationContainer key="app-navigation-container" theme={appTheme}>
      <Provider key="papaer-provider">
        <Root key="app-root" />
      </Provider>
    </NavigationContainer>
  );
}
