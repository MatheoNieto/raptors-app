import {OptionType} from '@components/Dropdown';

export class EpsMapper {
  static toOption(eps: string[]): OptionType[] {
    return eps.map((epsItem, index) => ({
      value: index,
      label: epsItem,
    }));
  }
}
