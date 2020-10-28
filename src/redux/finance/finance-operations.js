import axios from 'axios';
import financeActions from './finance-actions';

axios.defaults.baseURL = 'https://raschitalochka.goit.co.ua/api/';

const getOperationsById = credentials => async (dispatch, getState) => {
  const {
    auth: {
      user: { id },
    },
  } = getState();

  if (!id) {
    return;
  }
  const response = await axios.get(`/finance/${id}`, credentials);
  const { finance } = response.data;

  dispatch(financeActions.getFinanceByIdRequest());
  try {
    dispatch(financeActions.getFinanceByIdSuccess(finance.data));
  } catch (error) {
    dispatch(financeActions.getFinanceByIdError());
  }
};

export default {
  getOperationsById,
};
