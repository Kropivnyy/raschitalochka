import axios from 'axios';
import currencyActions from '../currency/currency-actions';

const fetchCurrency = () => async dispatch => {
  try {
    await dispatch(currencyActions.currencyRequest());
    const { data } = await axios.get(
      'https://cors-anywhere.herokuapp.com/https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5',
    );
    await dispatch(currencyActions.currencySuccess(data));
  } catch ({ message }) {
    await dispatch(currencyActions.currencyError(message));
  }
};

export default { fetchCurrency };
