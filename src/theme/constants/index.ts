import type {FontWeight} from '@theme/types';

export enum CustomFonts {
  SpaceGrotesk = 'SpaceGrotesk',
}

export const FONT_WEIGHT_MAPPING: Record<FontWeight, string> = {
  '100': '-Light',
  '200': '-Light',
  '300': '-Light',
  '400': '-Regular',
  '500': '-Medium',
  '600': '-SemiBold',
  '700': '-Bold',
  '800': '-Bold',
  '900': '-Bold',
  normal: '-Regular',
  bold: '-Bold',
  ultralight: '-Light',
  thin: '-Light',
  light: '-Light',
  medium: '-Medium',
  regular: '-Regular',
  semibold: '-SemiBold',
  condensedBold: '-Bold',
  condensed: '-Bold',
  heavy: '-Bold',
  black: '-Bold',
};

export {default as palette} from './palette';
