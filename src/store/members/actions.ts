import {createAction} from '@reduxjs/toolkit';
import {MembersDTO} from '@store/data/dto/membersDTO';

export const memberActions = {
  addMember: createAction<{member: MembersDTO}>('add/member'),
};
