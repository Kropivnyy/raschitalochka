import axios from 'axios';
import userActions from './user-actions';

const fetchTotalBalance = userId => async dispatch => {
  dispatch(userActions.userRequest());
  try {
    const user = await axios.get(`/finance/${userId}`);
    if (!user) return new Error('Error user total balance');
    await dispatch(userActions.userSuccess(user));
  } catch ({ message }) {
    dispatch(userActions.userError(message));
  }
};

export default { fetchTotalBalance };
