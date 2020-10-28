import { createAction } from '@reduxjs/toolkit';

const userRequest = createAction('user/userRequest');
const userSuccess = createAction('user/userSuccess');
const userError = createAction('user/userError');

export default {
  userRequest,
  userSuccess,
  userError,
};
