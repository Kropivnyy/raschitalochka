import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import authActions from './auth-actions';

const initialUserState = { name: null, email: null };

const userIsRegistration = createReducer(false, {
  [authActions.registrationSuccess]: (_, { payload }) => payload.success,
});

const user = createReducer(initialUserState, {
  [authActions.loginSuccess]: (_, { payload }) => payload.user,
});
const token = createReducer(null, {
  [authActions.loginSuccess]: (_, { payload }) => payload.token,
});

const setError = (_, { payload }) => payload;

const error = createReducer(null, {
  [authActions.registrationError]: setError,
  [authActions.loginError]: setError,
  [authActions.statisticsError]: setError,
  [authActions.fetchStatisticsError]: setError,
  [authActions.currencyError]: setError,
});

const isAuthenticated = createReducer(false, {
  [authActions.loginSuccess]: () => true,
  [authActions.registrationError]: () => false,
  [authActions.loginError]: () => false,
});

export default combineReducers({
  isAuthenticated,
  userIsRegistration,
  user,
  token,
  error,
});
