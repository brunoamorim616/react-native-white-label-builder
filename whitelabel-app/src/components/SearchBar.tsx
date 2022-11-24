import {View, Text} from 'react-native';
import React from 'react';
import {Input, SearchIcon} from 'native-base';

export function SearchBar() {
  return (
    <Input
      _focus={{
        bgColor: 'gray.300',
      }}
      borderWidth={0}
      placeholder="Search"
      variant="filled"
      width="90%"
      borderRadius="10"
      py="1"
      px="2"
      backgroundColor="gray.200"
      fontWeight={'bold'}
      InputLeftElement={
        <SearchIcon fontWeight={'bold'} ml="2" size="5" color="black" />
      }
    />
  );
}
