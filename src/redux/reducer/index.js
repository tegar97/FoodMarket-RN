import {combineReducers} from 'redux';
import {photoReducer, registerReducer} from './auth';
import {globalReducer} from './global';

const reducer = combineReducers({registerReducer, globalReducer, photoReducer});

export default reducer;
