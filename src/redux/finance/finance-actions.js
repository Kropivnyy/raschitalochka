import { createAction } from '@reduxjs/toolkit';

const getFinanceByIdRequest = createAction('finance/getFinanceByIdRequest');
const getFinanceByIdSuccess = createAction('finance/getFinanceByIdSuccess');
const getFinanceByIdError = createAction('finance/getFinanceByIdError');

export default {
  getFinanceByIdRequest,
  getFinanceByIdSuccess,
  getFinanceByIdError,
};
