import {combineReducers} from 'redux';
import type {PayloadAction} from '@reduxjs/toolkit';

import memberReducer from './members/reducer';

const combinedRootReducer = combineReducers({
  members: memberReducer,
});

function rootReducer(state: any, action: PayloadAction) {
  return combinedRootReducer(state, action);
}

export default rootReducer;
