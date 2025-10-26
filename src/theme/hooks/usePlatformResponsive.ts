// @ts-nocheck
import {useResponsiveProp} from '@shopify/restyle';
import type {Theme} from '@theme';
import {Platform} from 'react-native';

export function usePlatformResponsive<T = any>(values: {
  ios: {phone: T; tablet: T};
  android: {phone: T; tablet: T};
}) {
  const selected = Platform.OS === 'ios' ? values.ios : values.android;
  return useResponsiveProp<Theme, T>(selected);
}
