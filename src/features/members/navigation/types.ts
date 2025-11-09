import {StackNavigationProp} from '@react-navigation/stack';
import {MembersDTO} from '@store/data/dto/membersDTO';

export enum RoutesMembers {
  LIST_MEMBERS = 'LIST_MEMBERS',
  CREATE_MEMBER = 'CREATE_MEMBER',
  DETAIL_MEMBER = 'DETAIL_MEMBERS',
}

export type MembersParamsList = {
  [RoutesMembers.LIST_MEMBERS]: undefined;
  [RoutesMembers.CREATE_MEMBER]: undefined;
  [RoutesMembers.DETAIL_MEMBER]: {
    memberId: MembersDTO['id'];
  };
};

export type MembersStackProps = StackNavigationProp<MembersParamsList>;
