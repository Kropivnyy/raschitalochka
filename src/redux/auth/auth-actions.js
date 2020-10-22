import { createAction } from '@reduxjs/toolkit';

const registrationRequest = createAction('auth/registrationRequest');
const registrationSuccess = createAction('auth/registrationSuccess');
const registrationError = createAction('auth/registrationError');

const loginRequest = createAction('auth/loginRequest');
const loginSuccess = createAction('auth/loginSuccess');
const loginError = createAction('auth/loginError');

const statisticsRequest = createAction('auth/statisticsRequest');
const statisticsSuccess = createAction('auth/statisticsSuccess');
const statisticsError = createAction('auth/statisticsError');

const fetchStatisticsRequest = createAction('auth/fetchStatisticsRequest');
const fetchStatisticsSuccess = createAction('auth/fetchStatisticsSuccess');
const fetchStatisticsError = createAction('auth/fetchStatisticsError');

const currencyRequest = createAction('auth/currencyRequest');
const currencySuccess = createAction('auth/currencySuccess');
const currencyError = createAction('auth/currencyError');

export default {
  registrationRequest,
  registrationSuccess,
  registrationError,
  loginRequest,
  loginSuccess,
  loginError,
  statisticsRequest,
  statisticsSuccess,
  statisticsError,
  fetchStatisticsRequest,
  fetchStatisticsSuccess,
  fetchStatisticsError,
  currencyRequest,
  currencySuccess,
  currencyError,
};
