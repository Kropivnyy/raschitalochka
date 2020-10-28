import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import userActions from './user-actions';

const error = createReducer(null, {
  [userActions.userError]: (_, { payload }) => payload,
});

const totalBalance = createReducer(null, {
  [userActions.userSuccess]: (_, { payload }) =>
    payload.data.finance.totalBalance,
});

const loading = createReducer(false, {
  [userActions.userRequest]: () => true,
  [userActions.userSuccess]: () => false,
  [userActions.userError]: () => false,
});

export default combineReducers({
  error,
  totalBalance,
  loading,
});
