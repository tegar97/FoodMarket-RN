import {combineReducers} from 'redux';
import {photoReducer, registerReducer} from './auth';
import {globalReducer} from './global';
import {homeReducer} from './home';

const reducer = combineReducers({
  registerReducer,
  globalReducer,
  photoReducer,
  homeReducer,
});

export default reducer;
