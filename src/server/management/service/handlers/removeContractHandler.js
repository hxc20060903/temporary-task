export default function removeContractHandler({ Contract }) {
  return async function handleRemoveContract(command) {
    const { contractId } = command;
    await Contract.deleteOne({ _id: contractId });

    return { id: contractId };
  };
}
