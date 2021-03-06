import { ArgumentNullError } from 'common-errors';
import { ofType } from 'redux-observable';
import { mergeMap } from 'rxjs/operators/mergeMap';

import { Actions, actionCreators } from '../actions';

const createContract = (action$, store, { send }) => action$.pipe(
  ofType(Actions.CREATE_CONTRACT_START),
  mergeMap(async (action) => {
    const { payload: contract } = action;
    if (!contract) {
      // @TODO should be INTL compatible
      throw new ArgumentNullError('contract value should be concrete');
    }
    try {
      const response = await send({
        method: 'post',
        url: '/contracts',
        data: contract,
      });
      return actionCreators.createContractSuccess(response.data);
    } catch (error) {
      return actionCreators.createContractFailed(error);
    }
  }),
);

export default createContract;
