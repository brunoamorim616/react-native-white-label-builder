import React, {useId} from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import modules from '../../modules';

const BottomTabNavigator = createBottomTabNavigator();

export function BottomTab() {
  const navigatorKey = useId();
  return (
    <BottomTabNavigator.Navigator
      key={navigatorKey}
      initialRouteName={modules[0].title}>
      {modules.map(module => (
        <BottomTabNavigator.Screen
          key={module.id}
          name={module.title}
          component={module.component}
        />
      ))}
    </BottomTabNavigator.Navigator>
  );
}
