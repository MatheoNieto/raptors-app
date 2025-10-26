import theme from './theme.core';
import {ThemeProvider as RestyleProvider} from '@shopify/restyle';
import React from 'react';

type Props = {
  children: React.ReactElement;
};
const ThemeProvider: React.FC<Props> = ({children}) => {
  return <RestyleProvider theme={theme}>{children}</RestyleProvider>;
};

export default ThemeProvider;
