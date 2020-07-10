import formVisibleReducer from './form-visible-reducer';
import bagListReducer from './bag-list-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  masterBagList: bagListReducer
});

export default rootReducer;