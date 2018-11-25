import formatContract from './formatContract';

export default function getContractHandler({ Contract }) {
  return async function handleGetContract(command) {
    const { id } = command;
    const createdContract = await Contract.findById(id);

    return formatContract(createdContract);
  };
}
