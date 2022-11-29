import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import modules from '../modules';

const AuthNavigator = createNativeStackNavigator();

export function AuthRouter() {
  return (
    <AuthNavigator.Navigator>
      {modules.map(module => (
        <AuthNavigator.Screen
          key={module.id}
          name={module.title}
          component={module.component}
        />
      ))}
    </AuthNavigator.Navigator>
  );
}
