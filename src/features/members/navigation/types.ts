import {StackNavigationProp} from '@react-navigation/stack';

export enum RoutesMembers {
  LIST_MEMBERS = 'LIST_MEMBERS',
  CREATE_MEMBER = 'CREATE_MEMBER',
}

export type MembersParamsList = {
  [RoutesMembers.LIST_MEMBERS]: undefined;
  [RoutesMembers.CREATE_MEMBER]: undefined;
};

export type MembersStackProps = StackNavigationProp<MembersParamsList>;