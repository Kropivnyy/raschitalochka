import axios from 'axios';
import userActions from './user-actions';

const fetchTotalBalance = userId => async dispatch => {
  dispatch(userActions.userRequest());
  try {
    const { data } = await axios.get(`/finance/${userId}`);
    if (!data) return;
    await dispatch(userActions.userSuccess(data));
  } catch ({ message }) {
    dispatch(userActions.userError(message));
  }
};

export default { fetchTotalBalance };
