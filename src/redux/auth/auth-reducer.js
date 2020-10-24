import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import authActions from './auth-actions';

const initialUserState = { name: null, email: null };

const user = createReducer(initialUserState, {
  [authActions.loginSuccess]: (_, { payload }) => payload.user,
  [authActions.logoutSuccess]: () => initialUserState,
});
const token = createReducer(null, {
  [authActions.loginSuccess]: (_, { payload }) => payload.token,
  [authActions.logoutSuccess]: () => null,
});

const setError = (_, { payload }) => payload;

const error = createReducer(null, {
  [authActions.registrationError]: setError,
  [authActions.loginError]: setError,
  [authActions.statisticsError]: setError,
  [authActions.fetchStatisticsError]: setError,
  [authActions.currencyError]: setError,
  [authActions.getTokeFromLsError]: setError,
});

const isAuthenticated = createReducer(false, {
  [authActions.registrationSuccess]: () => true,
  [authActions.loginSuccess]: () => true,
  [authActions.getTokeFromLsRequest]: () => true,
  [authActions.registrationError]: () => false,
  [authActions.loginError]: () => false,
  [authActions.getTokeFromLsError]: () => false,
  [authActions.logoutSuccess]: () => false,
});

export default combineReducers({
  isAuthenticated,
  user,
  token,
  error,
});
