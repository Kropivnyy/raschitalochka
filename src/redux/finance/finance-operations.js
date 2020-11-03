import axios from 'axios';
import financeActions from './finance-actions';

axios.defaults.baseURL = 'https://raschitalochka.goit.co.ua/api/';

const getOperationsById = () => async (dispatch, getState) => {
  try {
    const {
      auth: {
        user: { id },
      },
    } = getState();

    if (!id) return;

    await dispatch(financeActions.getFinanceByIdRequest());

    const { data } = await axios.get(`finance/${id}`);

    await dispatch(financeActions.getFinanceByIdSuccess(data.finance));
  } catch (error) {
    await dispatch(financeActions.getFinanceByIdError());
  }
};

const postTransaction = formData => async (dispatch, getState) => {
  try {
    const {
      auth: {
        user: { id },
      },
      finance: {
        data: { totalBalance },
      },
    } = getState();

    if (!id) return;

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

    await dispatch(financeActions.postTransactionRequest());

    const { data } = await axios.post(`/finance/${id}`, transaction);

    await dispatch(financeActions.postTransactionSuccess(data.finance));
  } catch (error) {
    await dispatch(financeActions.postTransactionError());
  }
};

export default {
  getOperationsById,
  postTransaction,
};
