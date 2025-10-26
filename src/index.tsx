import React from 'react';

import {RootNavigator} from '@routes/RootNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import ThemeProvider from '@theme/ThemeProvider';
import {Provider as StoreProvider, ProviderProps} from 'react-redux';
import {PersistGate, PersistGateProps} from 'redux-persist/integration/react';

type Props = Pick<PersistGateProps, 'persistor'> &
  Omit<ProviderProps, 'children'>;

export const Application: React.FC<Props> = ({persistor, store}) => {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <StoreProvider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <ThemeProvider>
            <NavigationContainer>
              <RootNavigator />
            </NavigationContainer>
          </ThemeProvider>
        </PersistGate>
      </StoreProvider>
    </SafeAreaProvider>
  );
};
