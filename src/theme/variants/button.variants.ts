import {CustomFonts} from '@theme/constants';

const buttonVariants = {
  defaults: {
    borderRadius: 's',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    px: 'm',
    py: 's',
    minHeight: 50,
    fontFamily: CustomFonts.SpaceGrotesk,
    fontWeight: '600',
    fontSize: 17,
    letterSpacing: 0.049,
  },
  solid: {
    backgroundColor: 'primaryBlue',
    color: 'white',
  },
};

export default buttonVariants;
