import useTheme from './useTheme';
import {useColorScheme} from 'react-native';

export default function useIsDarkMode() {
  const [theme] = useTheme();
  const systemTheme = useColorScheme() === 'dark';

  switch (theme) {
    case 'Light':
      return false;

    default:
      return systemTheme;
  }
}
