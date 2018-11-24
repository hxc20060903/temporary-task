import { createAction } from 'redux-actions';

const CREATE_CONTRACT = '@contract/CREATE_CONTRACT';
const REMOVE_CONTRACT = '@contract/REMOVE_CONTRACT';
const UPDATE_CONTRACT = '@contract/UPDATE_CONTRACT';
const GET_CONTRACTS = '@contract/GET_CONTRACTS';

const createSuccessActionType = (type = '') => `${type}_SUCCESS`;
const createFailureActionType = (type = '') => `${type}_FAILURE`;
const createStartActionType = (type = '') => `${type}_START`;

// I don't have typescript here... A little bit ugly
export const Actions = {
  CREATE_CONTRACT_START: createStartActionType(CREATE_CONTRACT),
  CREATE_CONTRACT_SUCCESS: createSuccessActionType(CREATE_CONTRACT),
  CREATE_CONTRACT_FAILED: createFailureActionType(CREATE_CONTRACT),

  REMOVE_CONTRACT_START: createStartActionType(REMOVE_CONTRACT),
  REMOVE_CONTRACT_SUCCESS: createSuccessActionType(REMOVE_CONTRACT),
  REMOVE_CONTRACT_FAILED: createFailureActionType(REMOVE_CONTRACT),

  UPDATE_CONTRACT_START: createStartActionType(UPDATE_CONTRACT),
  UPDATE_CONTRACT_SUCCESS: createSuccessActionType(UPDATE_CONTRACT),
  UPDATE_CONTRACT_FAILED: createFailureActionType(UPDATE_CONTRACT),

  GET_CONTRACTS_START: createStartActionType(GET_CONTRACTS),
  GET_CONTRACTS_SUCCESS: createSuccessActionType(GET_CONTRACTS),
  GET_CONTRACTS_FAILED: createFailureActionType(GET_CONTRACTS),
};

export const actionCreators = {
  createContractStart: createAction(Actions.CREATE_CONTRACT_START),
  createContractSuccess: createAction(Actions.CREATE_CONTRACT_SUCCESS),
  createContractFailed: createAction(Actions.CREATE_CONTRACT_FAILED),

  removeContractStart: createAction(Actions.REMOVE_CONTRACT_START),
  removeContractSuccess: createAction(Actions.REMOVE_CONTRACT_SUCCESS),
  removeContractFailed: createAction(Actions.REMOVE_CONTRACT_FAILED),

  updateContractStart: createAction(Actions.UPDATE_CONTRACT_START),
  updateContractSuccess: createAction(Actions.UPDATE_CONTRACT_SUCCESS),
  updateContractFailed: createAction(Actions.UPDATE_CONTRACT_FAILED),

  getContractsStart: createAction(Actions.GET_CONTRACTS_START),
  getContractsSuccess: createAction(Actions.GET_CONTRACTS_SUCCESS),
  getContractsFailed: createAction(Actions.GET_CONTRACTS_FAILED),
};
