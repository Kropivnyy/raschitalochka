import axios from 'axios';
import currencyActions from '../currency/currency-actions';

const fetchCurrency = () => async dispatch => {
  dispatch(currencyActions.currencyRequest());
  try {
    const { data } = await axios.get(
      'https://cors-anywhere.herokuapp.com/https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5',
    );
    if (!data) return new Error('Error currency');
    await dispatch(currencyActions.currencySuccess(data));
  } catch ({ message }) {
    dispatch(currencyActions.currencyError(message));
  }
};

export default { fetchCurrency };
