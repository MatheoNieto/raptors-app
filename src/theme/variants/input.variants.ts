import {CustomFonts} from '@theme/constants';

const inputVariants = {
  defaults: {
    fontFamily: CustomFonts.SpaceGrotesk,
    fontWeight: '300',
    fontSize: 16,
    color: 'textPrimary',
    backgroundColor: 'input',
    paddingHorizontal: 'm',
    height: 60,
    borderRadius: 's',
    borderWidth: 1,
    borderColor: 'inputBorder',
  },
  focused: {
    borderColor: 'inputBorderFocused',
    fontWeight: '700',
  },
  error: {
    borderColor: 'errorAlert',
  },
};

export default inputVariants;
