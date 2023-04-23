import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';

import {useId} from 'react';
import modules from '../../modules';

const DrawerNavigator = createDrawerNavigator();

export function Drawer() {
  const navigatorKey = useId();
  return (
    <DrawerNavigator.Navigator
      key={navigatorKey}
      defaultStatus="closed"
      initialRouteName={modules[0].title}>
      {modules.map(module => (
        <DrawerNavigator.Screen
          key={module.id}
          name={module.title}
          component={module.component}
        />
      ))}
    </DrawerNavigator.Navigator>
  );
}
