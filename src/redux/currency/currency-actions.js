import { createAction } from '@reduxjs/toolkit';

const currencyRequest = createAction('currency/currencyRequest');
const currencySuccess = createAction('currency/currencySuccess');
const currencyError = createAction('currency/currencyError');

export default {
  currencyRequest,
  currencySuccess,
  currencyError,
};
