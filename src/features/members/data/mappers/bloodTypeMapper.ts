import {OptionType} from '@components/Dropdown';

export class BloodTypeMapper {
  static toOption(bloodTypes: string[]): OptionType[] {
    return bloodTypes.map(blood => ({
      value: blood,
      label: blood,
    }));
  }
}
