import {View, Text} from 'react-native';
import React from 'react';
import {SearchBar} from '../../components';
import {Center} from 'native-base';

export function Cart() {
  return (
    <Center w="100%" safeAreaY={2}>
      <SearchBar />
    </Center>
  );
}
