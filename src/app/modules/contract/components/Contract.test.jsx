import React from 'react';

import Contract from './Contract';
import { ContractFormFields } from '../constants';
import { mountWithAppContext } from '../../../uiTestUtils';

it('renders successfully', () => {
  const className = 'test-contract';
  const onClick = jest.fn();
  const onClose = jest.fn();
  const data = {
    [ContractFormFields.AMOUNT]: 100,
    [ContractFormFields.CURRENCY]: 'JPY',
    [ContractFormFields.DATE]: new Date().valueOf(),
    [ContractFormFields.ID]: 'id',
    [ContractFormFields.SURNAME]: 'Huang',
    [ContractFormFields.USERNAME]: 'Jack',
  };

  const wrapper = mountWithAppContext((
    <Contract
      data={data}
      className={className}
      onClick={onClick}
      onClose={onClose}
    />
  ));

  const closeButton = wrapper.find('button');
  closeButton.simulate('click');
  expect(onClose).toHaveBeenCalledTimes(1);
  expect(onClick).toHaveBeenCalledTimes(0);

  wrapper.simulate('click');
  expect(onClick).toHaveBeenCalledTimes(1);

  wrapper.unmount();
});
