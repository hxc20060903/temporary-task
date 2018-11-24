import React from 'react';
import { mount } from 'enzyme';
import Button from './Button';

it('renders successfully', () => {
  const buttonCn = 'test-button';
  const contentCn = 'test-content';
  const wrapper = mount((
    <Button
      className={buttonCn}
      disabled
    >
      <div id={contentCn}>{contentCn}</div>
    </Button>
  ));
  expect(wrapper.prop('className')).toMatch(new RegExp(buttonCn));
  expect(wrapper.prop('disabled')).toBe(true);
  expect(wrapper.find(`#${contentCn}`).text()).toBe(contentCn);
  wrapper.unmount();
});

it('reacts to onClick if not disabled', () => {
  const onClick = jest.fn();
  const wrapper = mount((
    <Button onClick={onClick}>content</Button>
  ));
  wrapper.simulate('click');
  expect(onClick).toHaveBeenCalledTimes(1);
  wrapper.unmount();
});

it('does not react to Onclick if disabled', () => {
  const onClick = jest.fn();
  const wrapper = mount((
    <Button onClick={onClick} disabled>content</Button>
  ));
  wrapper.simulate('click');
  expect(onClick).toHaveBeenCalledTimes(0);
  wrapper.unmount();
});
