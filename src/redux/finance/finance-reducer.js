import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import financeActions from './finance-actions';

const data = createReducer([], {
  [financeActions.getFinanceByIdSuccess]: (_, { payload }) => payload,
  [financeActions.postTransactionSuccess]: (_, { payload }) => payload,
});

const setError = (_, { payload }) => payload;

const error = createReducer(null, {
  [financeActions.getFinanceByIdError]: setError,
  [financeActions.postTransactionError]: setError,
});

const isLoading = createReducer(false, {
  [financeActions.getFinanceByIdRequest]: () => false,
  [financeActions.getFinanceByIdSuccess]: () => true,
  [financeActions.getFinanceByIdError]: () => false,
  [financeActions.postTransactionRequest]: () => false,
  [financeActions.postTransactionSuccess]: () => true,
  [financeActions.postTransactionError]: () => false,
});

export default combineReducers({
  data,
  isLoading,
  error,
});
