import axios from 'axios';
import {
  GET_APRESENTACAO,
  APRESENTACAO_ERROR,
  ADD_APRESENTACAO
} from './types';
import { setAlert } from './alert';

// GET Apresentacoes
export const getApresentacoes = () => async dispatch => {
  try {
    const res = await axios.get('/api/apresentacoes');

    dispatch({
      type: GET_APRESENTACAO,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: APRESENTACAO_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status }
    });
  }
};

// ADD Apresentacao
export const addApresentacao = formData => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  };

  try {
    const res = await axios.post('/api/apresentacoes', formData, config);

    dispatch({
      type: ADD_APRESENTACAO,
      payload: res.data
    });

    dispatch(setAlert('Apresentação inserida com sucesso!', 'success'));
  } catch (error) {
    dispatch({
      type: APRESENTACAO_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status }
    });
  }
};
