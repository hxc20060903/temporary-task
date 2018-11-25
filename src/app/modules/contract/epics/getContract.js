import { ofType } from 'redux-observable';
import { switchMap } from 'rxjs/operators/switchMap';
import { ArgumentError } from 'common-errors';
import { isString } from 'lodash';

import { Actions, actionCreators } from '../actions';

// ts can help to define ApiClient here
const getContracts = (action$, store, { send }) => action$.pipe(
  ofType(Actions.GET_CONTRACT_START),
  switchMap(async (action) => {
    const { payload: id } = action;
    if (!isString(id)) {
      throw new ArgumentError('Please provide filters');
    }
    try {
      const response = await send({
        method: 'get',
        url: `/contracts/${id}`,
      });
      return actionCreators.getContractSuccess(response.data);
    } catch (error) {
      return actionCreators.getContractFailed(error);
    }
  }),
);

export default getContracts;
