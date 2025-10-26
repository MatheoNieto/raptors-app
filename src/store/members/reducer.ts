import {createReducer} from '@reduxjs/toolkit';
import {memberActions} from './actions';
import {MembersDTO} from '@store/data/dto/membersDTO';

type State = {
  members: MembersDTO[];
};

const INITIAL_STATE: State = {
  members: [],
};

const membersReducer = createReducer(INITIAL_STATE, builder => {
  builder.addCase(memberActions.addMember, (state, action) => {
    state.members.push(action.payload.member);
  });
});

export type MemberState = ReturnType<typeof membersReducer>;
export default membersReducer;
