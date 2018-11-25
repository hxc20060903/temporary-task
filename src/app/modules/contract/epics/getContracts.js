import { ofType } from 'redux-observable';
import { switchMap } from 'rxjs/operators/switchMap';
import { ArgumentError } from 'common-errors';

import { Actions, actionCreators } from '../actions';

// ts can help to define ApiClient here
const getContracts = (action$, store, { send }) => action$.pipe(
  ofType(Actions.GET_CONTRACTS_START),
  switchMap(async (action) => {
    const { payload: filters } = action;
    if (!filters) {
      throw new ArgumentError('Please provide filters');
    }
    try {
      const response = await send({
        method: 'get',
        url: '/contracts',
        params: filters,
      });
      return actionCreators.getContractsSuccess(response.data);
    } catch (error) {
      return actionCreators.getContractsFailed(error);
    }
  }),
);

export default getContracts;
