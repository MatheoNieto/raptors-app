import {createSelector} from '@reduxjs/toolkit';
import {MembersDTO} from '@store/data/dto/membersDTO';
import {RootState} from '@store/store';

const memberSelector = (state: RootState) => state.members;

export const membersListSelector = createSelector(
  memberSelector,
  state => state.members,
);

export const memberDataSelector = createSelector(
  memberSelector,
  (_: any, memberId: MembersDTO['id']) => memberId,
  (state, memberId) => {
    return state.members.find(memberItem => memberItem.id === memberId);
  },
);
