import axios from 'axios';
import transactionActions from './transaction-actions';

const createTransaction = (userId, data) => async dispatch => {
  try {
    const url = `https://raschitalochka.goit.co.ua/api/finance/${userId}`;

    await axios.post(url, data);
  } catch (err) {
    console.log(err);
  }
};

const getTransactions = userId => async dispatch => {
  try {
    const url = `https://raschitalochka.goit.co.ua/api/finance/${userId}`;

    const data = await axios.get(url);
    console.log(11111);

    dispatch(transactionActions.setTransactions(data));
  } catch (err) {
    console.log(err);
  }
};

export default {
  createTransaction,
  getTransactions,
};
