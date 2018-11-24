import { combineReducers } from 'redux';
import { ContractReducer } from './modules/contract';

export default combineReducers({
  contract: ContractReducer,
});
