import type {Theme} from './types';
import {AllProps, RNStyle, useRestyle, useTheme} from '@shopify/restyle';

export const useAppTheme = () => useTheme<Theme>();

export const useAppRestyle = <TProps, ExtraStyle extends Record<string, any>>(
  restyleFunctions: Parameters<typeof useRestyle>[0],
  props: TProps & any,
) =>
  useRestyle(restyleFunctions as any, props) as Omit<
    TProps,
    keyof AllProps<Theme> | 'style' | 'variant'
  > & {
    style: Array<RNStyle & ExtraStyle>;
  };
export * from './constants';
export * from './types';

export const SIZE_ICON_PHONE = 25;
