import axios from 'axios';
import financeActions from './finance-actions';

axios.defaults.baseURL = 'https://raschitalochka.goit.co.ua/api/';

const getOperationsById = credentials => async (dispatch, getState) => {
  const {
    auth: {
      user: { id },
    },
  } = getState();

  if (!id) {
    return;
  }
  dispatch(financeActions.getFinanceByIdRequest());
  try {
    const { data } = await axios.get(`/finance/${id}`, credentials);

    dispatch(financeActions.getFinanceByIdSuccess(data.finance));
  } catch (error) {
    dispatch(financeActions.getFinanceByIdError());
  }
};

const postTransaction = formData => async (dispatch, getState) => {
  const {
    auth: {
      user: { id },
    },
  } = getState();

  if (!id) {
    return;
  }

  try {
    const transaction = {
      ...formData,
      type: formData.type === 'Income' ? '+' : '-',
      date: Date.parse(formData.date),
      amount: +formData.amount,
    };

    dispatch(financeActions.postTransactionRequest());
    const { data } = await axios.post(`/finance/${id}`, transaction);

    dispatch(financeActions.postTransactionSuccess(data.finance.data));
  } catch (error) {
    dispatch(financeActions.postTransactionError());
  }
};

export default {
  getOperationsById,
  postTransaction,
};
