import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '@store/store';

const memberSelector = (state: RootState) => state.members;

export const membersList = createSelector(
  memberSelector,
  state => state.members,
);
