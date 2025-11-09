import {OptionType} from '@components/Dropdown';

export class GenderMapper {
  static toOption(genders: string[]): OptionType[] {
    return genders.map(item => ({
      value: item,
      label: item,
    }));
  }
}
