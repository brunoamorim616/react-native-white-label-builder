import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Button, TextInput} from '../../../../components';
import {useAuth} from '../../../../contexts/AuthContext';

export function Login() {
  const {login} = useAuth();
  function handleLogin() {
    login();
  }

  return (
    <View style={styles.container}>
      <TextInput accessibilityLabel="Text input field" label="Login" />
      <TextInput accessibilityLabel="Text input field" label="Password" />
      <Button onPress={handleLogin} mode="contained">
        Login
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
