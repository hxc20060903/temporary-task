import React from 'react';
import { mount } from 'enzyme';

import StateField from './StateField';

it('renders successfully', () => {
  const labelContent = <div id="label">label</div>;
  const className = 'test-state-field';
  const onInputChange = jest.fn();
  const input = { onChange: onInputChange };

  const wrapper = mount((
    <StateField
      labelContent={labelContent}
      className={className}
      input={input}
    />
  ));
  expect(wrapper.find('#label')).toHaveLength(1);
  expect(wrapper.prop('className')).toMatch(new RegExp(className));

  wrapper.find('input').simulate('change');
  expect(onInputChange).toHaveBeenCalledTimes(1);

  wrapper.unmount();
});

it('error is shown when the StateField has already been touched', () => {
  const error = <div id="error">Error Message</div>;
  const labelContent = <div id="label">label</div>;

  const wrapper = mount((
    <StateField
      labelContent={labelContent}
      error={error}
      touched
    />
  ));
  expect(wrapper.find('#error')).toHaveLength(1);
});

it('error is hidden when the StateField has not yet been touched', () => {
  const error = <div id="error">Error Message</div>;
  const labelContent = <div id="label">label</div>;

  const wrapper = mount((
    <StateField
      labelContent={labelContent}
      error={error}
      touched={false}
    />
  ));
  expect(wrapper.find('#error')).toHaveLength(0);
});
