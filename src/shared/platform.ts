import {Platform, Dimensions} from 'react-native';

export const isAndroid = Platform.OS === 'android';
export const isIOS = Platform.OS === 'ios';

export const isTablet = false;

export default Platform;

let isLandscape =
  Dimensions.get('window').width > Dimensions.get('window').height;

export const checkIsLandscape = () => isLandscape;

Dimensions.addEventListener('change', ({window}) => {
  isLandscape = window.width > window.height;
});
