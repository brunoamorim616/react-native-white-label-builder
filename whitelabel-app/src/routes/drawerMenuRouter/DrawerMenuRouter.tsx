import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';

import {useId} from 'react';
import modules from '../../modules';

const DrawerMenuNavigator = createDrawerNavigator();

export function DrawerMenuRouter() {
  const navigatorKey = useId();
  return (
    <DrawerMenuNavigator.Navigator
      key={navigatorKey}
      defaultStatus="closed"
      initialRouteName={modules[0].title}>
      {modules.map(module => (
        <DrawerMenuNavigator.Screen
          key={module.id}
          name={module.title}
          component={module.component}
        />
      ))}
    </DrawerMenuNavigator.Navigator>
  );
}
