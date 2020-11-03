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
    if (!credentials) {
      const { data } = await axios.get(`/finance/${id}`);
      dispatch(financeActions.getFinanceByIdSuccess(data.finance));
      return;
    }
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
    finance: {
      data: { totalBalance },
    },
  } = getState();

  if (!id) {
    return;
  }

  try {
    const isIncome = formData.type === 'Income';
    const balanceAfter = isIncome
      ? totalBalance + +formData.amount
      : totalBalance - +formData.amount;
    const transaction = {
      ...formData,
      type: isIncome ? '+' : '-',
      date: Date.parse(formData.date),
      amount: +formData.amount,
      balanceAfter,
      typeBalanceAfter: balanceAfter > 0 ? '+' : '-',
    };

    dispatch(financeActions.postTransactionRequest());
    const { data } = await axios.post(`/finance/${id}`, transaction);

    dispatch(financeActions.postTransactionSuccess(data.finance));
  } catch (error) {
    dispatch(financeActions.postTransactionError());
  }
};

export default {
  getOperationsById,
  postTransaction,
};
