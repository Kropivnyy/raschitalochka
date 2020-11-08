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
  } catch ({ response }) {
    dispatch(authActions.registrationError(response.data.message));
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

const getTokenFromLS = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }
  token.set(persistedToken);

  dispatch(authActions.getTokenFromLSRequest());
  try {
    dispatch(authActions.getTokenFromLSSuccess());
  } catch (error) {
    dispatch(authActions.getTokenFromLSError());
  }
};

const logOut = () => async dispatch => {
  dispatch(authActions.logoutRequest());
  try {
    token.unset();
    dispatch(authActions.logoutSuccess());
  } catch ({ message }) {
    dispatch(authActions.logoutError(message));
  }
};

export default {
  registration,
  logIn,
  registrationLogin,
  getTokenFromLS,
  logOut,
};
