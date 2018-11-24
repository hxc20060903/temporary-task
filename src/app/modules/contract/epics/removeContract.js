import { ofType } from 'redux-observable';
import { switchMap } from 'rxjs/operators/switchMap';
import { ArgumentError } from 'common-errors';
import { isString } from 'lodash';

import { Actions, actionCreators } from '../actions';

// ts can help to define ApiClient here
const removeContract = (action$, store, { send }) => action$.pipe(
  ofType(Actions.REMOVE_CONTRACT_START),
  switchMap(async (action) => {
    const { payload: id } = action;
    if (isString(id)) {
      throw new ArgumentError('Please provide { id: string }');
    }
    try {
      const response = { data: { id } };
      // const response = await send.delete(`/contracts/${id}`);
      return actionCreators.removeContractSuccess(response.data);
    } catch (error) {
      return actionCreators.removeContractFailed(error);
    }
  }),
);

export default removeContract;
