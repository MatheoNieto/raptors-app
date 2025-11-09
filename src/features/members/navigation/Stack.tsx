import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {
  CreateMemberScreen,
  ListMembersScreen,
  MemberDetailScreen,
} from '../screens';
import {MembersParamsList, RoutesMembers} from './types';

export const MembersStack = () => {
  const {Navigator, Screen} = createStackNavigator<MembersParamsList>();

  return (
    <Navigator initialRouteName={RoutesMembers.LIST_MEMBERS}>
      <Screen
        name={RoutesMembers.LIST_MEMBERS}
        component={ListMembersScreen}
        options={{
          title: '',
        }}
      />
      <Screen
        name={RoutesMembers.CREATE_MEMBER}
        component={CreateMemberScreen}
        options={{
          title: '',
        }}
      />

      <Screen
        name={RoutesMembers.DETAIL_MEMBER}
        component={MemberDetailScreen}
        options={{
          title: '',
        }}
      />
    </Navigator>
  );
};
