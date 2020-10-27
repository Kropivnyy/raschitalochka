import axios from 'axios';
import userActions from './user-actions';

const fetchTotalBalance = userId => async dispatch => {
  dispatch(userActions.userRequest());
  try {
    console.log('===================');
    const user = await axios.get(`/api/finance/${userId}`);
    console.log('USER: ', user);
    if (!user) return new Error('Error user total balance');
    await dispatch(userActions.userSuccess(user));
  } catch ({ message }) {
    dispatch(userActions.userError(message));
  }
};

export default { fetchTotalBalance };
