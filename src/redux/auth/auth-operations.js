import axios from 'axios';
import authActions from './auth-actions';

axios.defaults.baseURL = 'https://localhost:3000/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const registration = credentials => async dispatch => {
  dispatch(authActions.registrationRequest());

  try {
    const response = await axios.post('/users/signup', credentials);

    token.set(response.data.token);
    dispatch(authActions.registrationSuccess(response.data));
  } catch ({ message }) {
    dispatch(authActions.registrationError(message));
  }
};

export default {
  registration,
};
