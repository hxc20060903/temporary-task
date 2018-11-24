import React from 'react';
import { mount } from 'enzyme';
import ReactPaginate from 'react-paginate';
import Paginate from './Paginate';

it('renders successfully', () => {
  const className = 'test-paginate';
  const wrapper = mount(
    <Paginate className={className} />,
  );
  expect(wrapper.find(`ul.${className}`)).toHaveLength(1);
  wrapper.unmount();
});

it('gives the new page index when page-link / page-button is clicked', () => {
  const onClick = jest.fn();
  const wrapper = mount(
    <Paginate onPageChange={onClick} pageCount={2} />,
  );
  const linksAndButton = wrapper.find('li>a');
  expect(linksAndButton).toHaveLength(4);
  // this part is determined by the react-paginate
  const selectedPage = 1;
  wrapper.find(ReactPaginate).prop('onPageChange')({ selected: selectedPage });
  expect(onClick).toHaveBeenCalledTimes(1);
  expect(onClick).toHaveBeenCalledWith(selectedPage);

  wrapper.unmount();
});
