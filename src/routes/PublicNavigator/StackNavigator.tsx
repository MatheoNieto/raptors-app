import React from 'react';
import { routes as stackRoutes } from './routes';
import { StackPublicDefinitions } from './types';
import { StackNavigator } from '../../navigators/StackNavigator';

let config = {
  routes: stackRoutes,
  initialRouteName: StackPublicDefinitions.MEMBERS,
};

export const StackNavigatorPublic = () => {
  const routes = Object.entries(config.routes).map(([name, value]) => ({
    ...value,
    name,
  }));

  return (
    <StackNavigator
      initialRouteName={config.initialRouteName}
      screenOptions={{ headerShown: false }}
      routes={routes}
    />
  );
};