import React, {useMemo} from 'react';

import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {Provider} from 'react-native-paper';
import {useColorScheme} from 'react-native';
import {App} from './src/App';
import {AuthProvider} from './src/contexts/AuthContext';

export function Root() {
  const osColorScheme = useColorScheme();

  const appTheme = useMemo(() => {
    if (osColorScheme === 'dark') return DarkTheme;
    else return DefaultTheme;
  }, [osColorScheme]);

  return (
    <NavigationContainer key="app-navigation-container" theme={appTheme}>
      <Provider key="papaer-provider">
        <AuthProvider>
          <App key="app-root" />
        </AuthProvider>
      </Provider>
    </NavigationContainer>
  );
}
