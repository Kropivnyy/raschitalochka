import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import financeActions from './finance-actions';

const data = createReducer([], {
  [financeActions.getFinanceByIdSuccess]: (_, { payload }) => payload,
});

const setError = (_, { payload }) => payload;

const error = createReducer(null, {
  [financeActions.getFinanceByIdError]: setError,
});

const isLoading = createReducer(false, {
  [financeActions.getFinanceByIdRequest]: () => false,
  [financeActions.getFinanceByIdSuccess]: () => true,
  [financeActions.getFinanceByIdError]: () => false,
});

export default combineReducers({
  data,
  isLoading,
  error,
});
