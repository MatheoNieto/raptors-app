import {forms} from '@features/members/constants/form';
import * as Yup from 'yup';
import {MembersDTO} from '../dto/membersDTO';

export class MemberMapper {
  static toDTO(
    member: Yup.InferType<typeof forms.createEditMember.schema>,
  ): MembersDTO {
    return member as MembersDTO;
  }
}
