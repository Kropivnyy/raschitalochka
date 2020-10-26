import { createAction } from '@reduxjs/toolkit';

const registrationRequest = createAction('auth/registrationRequest');
const registrationSuccess = createAction('auth/registrationSuccess');
const registrationError = createAction('auth/registrationError');

const loginRequest = createAction('auth/loginRequest');
const loginSuccess = createAction('auth/loginSuccess');
const loginError = createAction('auth/loginError');

const logoutRequest = createAction('auth/logoutRequest');
const logoutSuccess = createAction('auth/logoutSuccess');
const logoutError = createAction('auth/logoutError');

const statisticsRequest = createAction('auth/statisticsRequest');
const statisticsSuccess = createAction('auth/statisticsSuccess');
const statisticsError = createAction('auth/statisticsError');

const getUserFinanseByIdRequest = createAction(
  'auth/getUserFinanseByIdRequest',
);
const getUserFinanseByIdSuccess = createAction(
  'auth/getUserFinanseByIdSuccess',
);
const getUserFinanseByIdError = createAction('auth/getUserFinanseByIdError');

const getTokenFromLSRequest = createAction('auth/getCurrentUserRequest');
const getTokenFromLSSuccess = createAction('auth/getCurrentUserSuccess');
const getTokenFromLSError = createAction('auth/getCurrentUserError');

export default {
  registrationRequest,
  registrationSuccess,
  registrationError,
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  statisticsRequest,
  statisticsSuccess,
  statisticsError,
  getUserFinanseByIdRequest,
  getUserFinanseByIdSuccess,
  getUserFinanseByIdError,
  getTokenFromLSRequest,
  getTokenFromLSSuccess,
  getTokenFromLSError,
};
