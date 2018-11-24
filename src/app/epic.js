import { combineEpics } from 'redux-observable';

import { ContractEpic } from './modules/contract';

export default combineEpics(
  ContractEpic,
);
