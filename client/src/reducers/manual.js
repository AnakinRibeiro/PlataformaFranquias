import { GET_MANUAIS, MANUAIS_ERROR, ADD_MANUAIS } from '../actions/types';

const initialState = {
  manuais: [],
  manual: null,
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_MANUAIS:
      return {
        ...state,
        manuais: payload,
        loading: false
      };
    case ADD_MANUAIS:
      return {
        ...state,
        manuais: [payload, ...state.manuais],
        loading: false
      };
    case MANUAIS_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      return state;
  }
}
