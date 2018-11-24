import React from 'react';
import { noop } from 'lodash';
import { ContractFormFields } from './constants';

import { ContractListPage } from './ContractListPage';
import { Contract } from './components';
import { mountWithAppContext } from '../../uiTestUtils';

it('renders successfully', () => {
  const contracts = [{
    [ContractFormFields.AMOUNT]: 100,
    [ContractFormFields.CURRENCY]: 'JPY',
    [ContractFormFields.DATE]: new Date().valueOf(),
    [ContractFormFields.ID]: 'id',
    [ContractFormFields.SURNAME]: 'Huang',
    [ContractFormFields.USERNAME]: 'Jack',
  }];
  const getContractPage = jest.fn();

  const wrapper = mountWithAppContext((
    <ContractListPage
      contracts={contracts}
      totalPages={1}
      currentPage={0}
      pageSize={4}
      removeContract={noop}
      getContractPage={getContractPage}
    />
  ));
  expect(wrapper.find(Contract)).toHaveLength(contracts.length);
  expect(getContractPage).toHaveBeenCalledTimes(1);

  wrapper.unmount();
});
