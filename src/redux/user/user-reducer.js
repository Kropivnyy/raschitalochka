import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import userActions from './user-actions';

const error = createReducer(null, {
  [userActions.userError]: (_, { payload }) => payload,
});

const totalBalance = createReducer(null, {
  [userActions.userSuccess]: (_, { payload }) => payload.finance.totalBalance,
});

export default combineReducers({
  error,
  totalBalance,
});
