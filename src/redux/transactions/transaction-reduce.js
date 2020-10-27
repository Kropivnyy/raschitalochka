import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import transactionActions from './transaction-actions';

const data = createReducer([], {
  [transactionActions.setTransactions]: (_, { payload }) => payload.data,
});

export default combineReducers({
  data,
});
