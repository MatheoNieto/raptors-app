import React from 'react';
import {PublicNavigator} from './PublicNavigator';
import BaseSpinner from '@ui/components/BaseSpinner';

export const RootNavigator = () => {
  return (
    <React.Suspense fallback={<BaseSpinner />}>
      <PublicNavigator />
    </React.Suspense>
  );
};
