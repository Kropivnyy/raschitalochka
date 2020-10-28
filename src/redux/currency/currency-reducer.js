import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import currencyActions from './currency-actions';

const error = createReducer(null, {
  [currencyActions.currencyError]: (_, { payload }) => payload,
});

const data = createReducer(null, {
  [currencyActions.currencySuccess]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [currencyActions.currencyRequest]: () => true,
  [currencyActions.currencySuccess]: () => false,
  [currencyActions.currencyError]: () => false,
});

export default combineReducers({
  error,
  data,
  loading,
});
