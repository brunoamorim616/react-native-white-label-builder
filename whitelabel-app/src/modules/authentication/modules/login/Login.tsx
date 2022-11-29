import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Button, TextInput} from '../../../../components';

export function Login() {
  return (
    <View style={styles.container}>
      <TextInput label="Login" />
      <TextInput label="Password" />
      <Button onPress={() => {}} mode="contained">
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
