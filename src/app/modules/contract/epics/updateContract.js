import { ofType } from 'redux-observable';
import { switchMap } from 'rxjs/operators/switchMap';
import { ArgumentNullError } from 'common-errors';

import { Actions, actionCreators } from '../actions';

// ts can help to define ApiClient here
const updateContract = (action$, store, { send }) => action$.pipe(
  ofType(Actions.UPDATE_CONTRACT_START),
  switchMap(async (action) => {
    const { payload } = action;
    if (!payload) {
      throw new ArgumentNullError('contract value should be concrete');
    }
    const { id, ...contract } = payload;
    try {
      const response = await send({
        method: 'patch',
        url: `/contracts/${id}`,
        data: contract,
      });
      return actionCreators.updateContractSuccess(response.data);
    } catch (error) {
      return actionCreators.updateContractFailed(error);
    }
  }),
);

export default updateContract;
