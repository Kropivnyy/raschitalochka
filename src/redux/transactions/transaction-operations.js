import axios from 'axios';
import transactionActions from './transaction-actions';

axios.defaults.baseURL = 'https://raschitalochka.goit.co.ua/api/';

const createTransaction = (userId, data) => async dispatch => {
  try {
    const url = `/finance/${userId}`;

    await axios.post(url, data);
  } catch (err) {
    console.warn(err);
  }
};

const getTransactions = userId => async dispatch => {
  try {
    const url = `/finance/${userId}`;
    const response = await axios.get(url);

    dispatch(transactionActions.setTransactions(response.data.finance.data));
  } catch (err) {
    console.warn(err);
  }
};

export default {
  createTransaction,
  getTransactions,
};
