import axios from 'axios';
import currencyActions from '../currency/currency-actions';

const fetchCurrency = () => async dispatch => {
  dispatch(currencyActions.currencyRequest());
  try {
    const currency = await axios.get(
      'https://cors-anywhere.herokuapp.com/https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5',
    );
    if (!currency) return new Error('Error currency');
    await dispatch(currencyActions.currencySuccess(currency));
  } catch ({ message }) {
    dispatch(currencyActions.currencyError(message));
  }
};

export default { fetchCurrency };
