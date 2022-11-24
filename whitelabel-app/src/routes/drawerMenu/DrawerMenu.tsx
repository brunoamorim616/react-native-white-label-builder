import React from 'react';

import {
  createDrawerNavigator,
  DrawerNavigationOptions,
  DrawerScreenProps,
} from '@react-navigation/drawer';

import modules from '../../modules';
import {useId} from 'react';

const DrawerMenuNavigator = createDrawerNavigator();

const defaultScreenOptions: DrawerNavigationOptions = {};

export function DrawerMenu() {
  const navigatorKey = useId();
  return (
    <DrawerMenuNavigator.Navigator
      key={navigatorKey}
      defaultStatus="closed"
      initialRouteName={modules[0].title}
      defaultScreenOptions={defaultScreenOptions}>
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
