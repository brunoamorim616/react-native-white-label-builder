import React, {useId} from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import modules from '../../modules';

const BottomMenuNavigator = createBottomTabNavigator();

export function BottomMenuRouter() {
  const navigatorKey = useId();
  return (
    <BottomMenuNavigator.Navigator
      key={navigatorKey}
      initialRouteName={modules[0].title}>
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
