import React from 'react';
import DetailMember from '../containers/DetailMember';
import {RouteProp, useRoute} from '@react-navigation/native';
import {MembersParamsList, RoutesMembers} from '../navigation/types';

export const MemberDetailScreen = () => {
  const route =
    useRoute<RouteProp<MembersParamsList, RoutesMembers.DETAIL_MEMBER>>();

  return <DetailMember memberId={route.params.memberId} />;
};
