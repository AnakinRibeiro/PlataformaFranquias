import axios from 'axios';
import { GET_MANUAIS, MANUAIS_ERROR, ADD_MANUAIS } from './types';
import { setAlert } from './alert';

// GET Manuais
export const getManuais = () => async dispatch => {
  try {
    const res = await axios.get('/api/manuais');

    dispatch({
      type: GET_MANUAIS,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: MANUAIS_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status }
    });
  }
};

// ADD Manual
export const addManual = formData => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  };

  try {
    const res = await axios.post('/api/manuais', formData, config);

    dispatch({
      type: ADD_MANUAIS,
      payload: res.data
    });

    dispatch(setAlert('Manual inserido com sucesso!', 'success'));
  } catch (error) {
    dispatch({
      type: MANUAIS_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status }
    });
  }
};
