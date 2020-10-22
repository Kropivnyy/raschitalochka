import axios from 'axios';
import authActions from './auth-actions';

axios.defaults.baseURL = 'https://raschitalochka.goit.co.ua/api/';

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
    const response = await axios.post('/register', credentials);

    dispatch(authActions.registrationSuccess(response.data));
  } catch ({ message }) {
    dispatch(authActions.registrationError(message));
  }
};

const logIn = credentials => async dispatch => {
  dispatch(authActions.loginRequest());
  try {
    const response = await axios.post('/login', credentials);

    token.set(response.data.token);
    dispatch(authActions.loginSuccess(response.data));
  } catch ({ message }) {
    dispatch(authActions.loginError(message));
  }
};

const registrationLogin = credentials => async dispatch => {
  await registration(credentials)(dispatch);
  await logIn(credentials)(dispatch);
};

export default {
  registration,
  logIn,
  registrationLogin,
};
