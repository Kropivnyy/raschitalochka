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

const fetchStatisticsRequest = createAction('auth/fetchStatisticsRequest');
const fetchStatisticsSuccess = createAction('auth/fetchStatisticsSuccess');
const fetchStatisticsError = createAction('auth/fetchStatisticsError');

const getTokenFromLSRequest = createAction('auth/getCurrentUserRequest');
const getTokenFromLSSuccess = createAction('auth/getCurrentUserSuccess');
const getTokenFromLSError = createAction('auth/getCurrentUserError');

const getFinanceByIdRequest = createAction('auth/getFinanceByIdRequest');
const getFinanceByIdSuccess = createAction('auth/getFinanceByIdSuccess');
const getFinanceByIdError = createAction('auth/getFinanceByIdError');

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
  fetchStatisticsRequest,
  fetchStatisticsSuccess,
  fetchStatisticsError,
  getTokenFromLSRequest,
  getTokenFromLSSuccess,
  getTokenFromLSError,
  getFinanceByIdRequest,
  getFinanceByIdSuccess,
  getFinanceByIdError,
};
