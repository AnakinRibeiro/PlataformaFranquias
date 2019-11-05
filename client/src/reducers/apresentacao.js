import {
  GET_APRESENTACAO,
  APRESENTACAO_ERROR,
  ADD_APRESENTACAO
} from '../actions/types';

const initialState = {
  apresentacoes: [],
  apresentacao: null,
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_APRESENTACAO:
      return {
        ...state,
        apresentacoes: payload,
        loading: false
      };
    case ADD_APRESENTACAO:
      return {
        ...state,
        apresentacoes: [payload, ...state.apresentacoes],
        loading: false
      };
    case APRESENTACAO_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      return state;
  }
}
