import { createAction } from '@reduxjs/toolkit';

const currencyRequest = createAction('auth/currencyRequest');
const currencySuccess = createAction('auth/currencySuccess');
const currencyError = createAction('auth/currencyError');

export default {
  currencyRequest,
  currencySuccess,
  currencyError,
};
