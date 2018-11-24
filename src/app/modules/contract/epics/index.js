import { combineEpics } from 'redux-observable';
import createContract from './createContract';
import updateContract from './updateContract';
import removeContract from './removeContract';
import getContracts from './getContracts';

export default combineEpics(
  createContract,
  updateContract,
  removeContract,
  getContracts,
);
