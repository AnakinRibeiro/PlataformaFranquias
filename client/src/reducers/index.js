import { combineReducers } from 'redux';
import auth from './auth';
import manual from './manual';
import alert from './alert';
import apresentacao from './apresentacao';

export default combineReducers({
  alert,
  auth,
  manual,
  apresentacao
});
