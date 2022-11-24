import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import modules from '../../modules';

const BottomMenuNavigator = createBottomTabNavigator();

export function BottomMenu() {
  return (
    <BottomMenuNavigator.Navigator>
      {modules.map(module => (
        <BottomMenuNavigator.Screen
          key={module.id}
          name={module.title}
          component={module.component}
        />
      ))}
    </BottomMenuNavigator.Navigator>
  );
}
