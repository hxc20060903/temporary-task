import { pick } from 'lodash';
import formatContract from './formatContract';

// validation on params is missing
export default function updateContractHandler({ Contract }) {
  return async function handleUpdateContract(command) {
    const { contractId } = command;
    const contract = pick(command, [
      'userName', 'userSurname', 'amountInUsd', 'currency',
    ]);


    const updatedContract = await Contract.findOneAndUpdate(
      { _id: contractId },
      { ...contract, amountInUsd: Number(contract.amountInUsd) },
      { new: true },
    );
    return formatContract(updatedContract);
  };
}
