import {Theme} from '@theme';

export default function useColorModeValue<
  T = Theme['colors'] | Theme['spacing'] | number | string,
>(optionA: T, optionB: T) {
  // const isDarkMode = useIsDarkMode();
  return optionA;
}
