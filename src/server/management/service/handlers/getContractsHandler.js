import Promise from 'bluebird';
import { map } from 'lodash';
import formatContract from './formatContract';

export default function getContractsHandler({ Contract }) {
  return async function handleGetContracts(command) {
    const { pageSize: ps, currentPage: cp } = command;
    const pageSize = Number(ps);
    const currentPage = Number(cp);

    const options = {
      skip: pageSize * currentPage,
      limit: pageSize,
      lean: true,
      sort: '-createdAt', // can be more flexible
    };
    // userSpecificFilter to be further supported
    const userSpecificFilter = null;
    const projection = null;
    const [contracts, count] = await Promise.all([
      Contract.find(
        userSpecificFilter,
        projection,
        options,
      ),
      Contract.count(userSpecificFilter),
    ]);
    const totalPages = Math.ceil(count / pageSize);

    return {
      contracts: map(contracts, formatContract),
      totalPages,
    };
  };
}
