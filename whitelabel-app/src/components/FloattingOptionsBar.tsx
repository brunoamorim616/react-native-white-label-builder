import {View, Text} from 'react-native';
import React from 'react';
import {HStack, Badge} from 'native-base';

export function FloattingOptionsBar() {
  return (
    <HStack
      space={{
        base: 2,
        sm: 4,
      }}
      mx={{
        base: 'auto',
        md: 0,
      }}>
      <Badge colorScheme="success">SUCCESS</Badge>
      <Badge colorScheme="danger">DANGER</Badge>
      <Badge colorScheme="info">INFO</Badge>
      <Badge colorScheme="coolGray">DARK</Badge>
    </HStack>
  );
}
