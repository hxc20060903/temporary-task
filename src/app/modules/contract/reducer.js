import {
  filter, omit, fromPairs, map,
} from 'lodash';
import { handleActions } from 'redux-actions';
import { createSelector } from 'reselect';
import { Actions } from './actions';

const defaultContractModuleState = {
  contractsById: {},
  ids: [],
  totalPages: 0,
  currentPage: 0,
  pageSize: 4, // @todo make it flexible in UI
  errors: {},
};

const getContractModuleState = state => state.contract;
const getSelectedContracts = createSelector(
  getContractModuleState,
  ({ contractsById, ids }) => map(ids, id => contractsById[id]),
);
const getContractById = createSelector(
  getContractModuleState,
  (_, id) => id,
  ({ contractsById }, id) => contractsById[id],
);
const getTotalPages = createSelector(
  getContractModuleState,
  ({ totalPages }) => totalPages,
);
const getCurrentPage = createSelector(
  getContractModuleState,
  ({ currentPage }) => currentPage,
);
const getPageSize = createSelector(
  getContractModuleState,
  ({ pageSize }) => pageSize,
);

export const ContractStateSelector = {
  getSelectedContracts,
  getContractById,
  getTotalPages,
  getCurrentPage,
  getPageSize,
};

const handleCreateContractSuccess = (state, action) => {
  const { payload: contract } = action;
  return {
    ...state,
    contractsById: {
      ...state.contractsById,
      [contract.id]: contract,
    },
  };
};

const handleNewFailure = (state, action) => {
  const { error, ...contract } = action.payload;
  // this part really depends on the UI design.
  // It is also possible that errors should not be stored here,
  // which could indicate a further form component design then
  return {
    ...state,
    errors: {
      ...state.errors,
      [contract.id]: error,
    },
  };
};

const handleRemoveContractSuccess = (state, action) => {
  const { id: deletedId } = action.payload;
  return {
    ...state,
    ids: filter(state.ids, id => id !== deletedId),
    contractsById: omit(state.contractsById, deletedId),
  };
};

const handleUpdateContractSuccess = (state, action) => {
  const { payload: contract } = action;
  return {
    ...state,
    contractsById: {
      ...state.contractsById,
      [contract.id]: contract,
    },
  };
};

const handleGetContractsStart = (state, action) => {
  const { currentPage } = action.payload;
  return {
    ...state,
    currentPage,
    ids: [],
  };
};

const handleGetContractsSuccess = (state, action) => {
  const { contracts, totalPages } = action.payload;
  return {
    ...state,
    contractsById: {
      ...state.contractsById,
      ...fromPairs(map(contracts, c => [c.id, c])),
    },
    ids: map(contracts, c => c.id),
    totalPages,
  };
};

const handleGetContractSuccess = (state, action) => {
  const { payload: contract } = action;
  return {
    ...state,
    contractsById: {
      ...state.contractsById,
      [contract.id]: contract,
    },
  };
}

const handlers = handleActions({
  [Actions.GET_CONTRACTS_START]: handleGetContractsStart,

  [Actions.CREATE_CONTRACT_FAILED]: handleNewFailure,
  [Actions.REMOVE_CONTRACT_FAILED]: handleNewFailure,
  [Actions.UPDATE_CONTRACT_FAILED]: handleNewFailure,
  [Actions.GET_CONTRACTS_FAILED]: handleNewFailure,

  [Actions.CREATE_CONTRACT_SUCCESS]: handleCreateContractSuccess,
  [Actions.REMOVE_CONTRACT_SUCCESS]: handleRemoveContractSuccess,
  [Actions.UPDATE_CONTRACT_SUCCESS]: handleUpdateContractSuccess,
  [Actions.GET_CONTRACTS_SUCCESS]: handleGetContractsSuccess,
  [Actions.GET_CONTRACT_SUCCESS]: handleGetContractSuccess,
}, defaultContractModuleState);
export default handlers;
