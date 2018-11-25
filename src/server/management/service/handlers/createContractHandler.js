import formatContract from './formatContract';

export default function createContractHandler({ Contract }) {
  return async function handleCreateContract(command) {
    const {
      userName, userSurname, amountInUsd, currency,
    } = command;

    const createdContract = await Contract.create({
      userName,
      userSurname,
      amountInUsd,
      currency,
      date: new Date(),
    });

    return formatContract(createdContract);
  };
}
