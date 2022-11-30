import React from 'react';

import {ActivityIndicator} from 'react-native-paper';
import {StyleSheet, View} from 'react-native';
import Routes from './routes';
import Auth from './modules/authentication';
import {useAuth} from './contexts/AuthContext';

export function App() {
  const {signed, loading} = useAuth();

  if (loading)
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    );

  if (signed) return <Routes />;
  else return <Auth />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
