import {getCustomFontFamily} from '@ui/utils';
import {TextStyle} from 'react-native';

function useFontStyle({
  fontFamily,
  fontWeight,
}: Pick<TextStyle, 'fontFamily' | 'fontWeight'>) {
  if (!fontFamily) {
    return null;
  }
  const customFontFamily = getCustomFontFamily(fontFamily, fontWeight);
  return {
    fontFamily: customFontFamily ?? fontFamily,
    fontWeight: customFontFamily ? null : fontWeight,
  };
}

export default useFontStyle;
