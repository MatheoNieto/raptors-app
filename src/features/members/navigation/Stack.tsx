import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {CreateMemberScreen, ListMembersScreen} from '../screens';
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
    </Navigator>
  );
};
