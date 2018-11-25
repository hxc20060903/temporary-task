import formatContract from './formatContract';

export default function getContractHandler({ Contract }) {
  return async function handleGetContract(command) {
    const { contractId } = command;
    const createdContract = await Contract.findById(contractId);

    return formatContract(createdContract);
  };
}
