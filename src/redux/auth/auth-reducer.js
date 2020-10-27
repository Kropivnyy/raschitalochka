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
  [authActions.getTokenFromLSError]: setError,
  [authActions.getFinanceByIdError]: setError,
});

const isAuthenticated = createReducer(false, {
  [authActions.registrationSuccess]: () => true,
  [authActions.loginSuccess]: () => true,
  [authActions.getTokenFromLSRequest]: () => true,
  [authActions.registrationError]: () => false,
  [authActions.loginError]: () => false,
  [authActions.getTokenFromLSError]: () => false,
  [authActions.logoutSuccess]: () => false,
});

const finance = createReducer([], {
  [authActions.getFinanceByIdSuccess]: (_, { payload }) => payload,
});

const isLoading = createReducer(false, {
  [authActions.getFinanceByIdRequest]: () => false,
  [authActions.getFinanceByIdSuccess]: () => true,
  [authActions.getFinanceByIdError]: () => false,
});

export default combineReducers({
  isAuthenticated,
  user,
  token,
  error,
  finance,
  isLoading,
});
