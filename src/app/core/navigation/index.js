export const CONTRACT_LIST_PAGE = '/contract-list';
export const CREATE_CONTRACT_PAGE = '/create-contract';
export const UPDATE_CONTRACT_PAGE = '/contract/:contractId';

export const getUpdateContractPagePath = ({ contractId }) => UPDATE_CONTRACT_PAGE.replace(':contractId', contractId);
