import { omitBy, isFunction, startsWith } from 'lodash';

export default function formatContract(contract) {
  const fields = isFunction(contract.toJSON)
    ? contract.toJSON() : contract;

  const { _id, updatedAt } = fields;
  return {
    ...omitBy(fields, (_, key) => startsWith(key, '_')),
    id: _id.toString(),
    date: new Date(updatedAt).valueOf(),
  };
}
