import { createAction } from '@reduxjs/toolkit';

const getFinanceByIdRequest = createAction('finance/getFinanceByIdRequest');
const getFinanceByIdSuccess = createAction('finance/getFinanceByIdSuccess');
const getFinanceByIdError = createAction('finance/getFinanceByIdError');

const postTransactionRequest = createAction('finance/postTransactionRequest');
const postTransactionSuccess = createAction('finance/postTransactionSuccess');
const postTransactionError = createAction('finance/postTransactionError');

export default {
  getFinanceByIdRequest,
  getFinanceByIdSuccess,
  getFinanceByIdError,
  postTransactionRequest,
  postTransactionSuccess,
  postTransactionError,
};
