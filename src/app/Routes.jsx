import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import {
  CreateContractPage,
  UpdateContractPage,
  ContractListPage,
} from './modules/contract';
import {
  CONTRACT_LIST_PAGE,
  UPDATE_CONTRACT_PAGE,
  CREATE_CONTRACT_PAGE,
} from './core/navigation';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={CreateContractPage} />
      <Route exact path={CONTRACT_LIST_PAGE} component={ContractListPage} />
      <Route exact path={CREATE_CONTRACT_PAGE} component={CreateContractPage} />
      <Route exact path={UPDATE_CONTRACT_PAGE} component={UpdateContractPage} />
      <Redirect to="/" />
    </Switch>
  );
}
