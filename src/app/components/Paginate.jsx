import React from 'react';
import ReactPaginate from 'react-paginate';
import { css, cx } from 'emotion';
import { FormattedMessage } from 'react-intl';
import bem, { modifier } from '../bem';
import { CommonActions } from '../core/intl';

const block = bem('paginate');
const pageLinkElement = block('page-link');
const activePageLinkElement = block('page-link', { active: true });
const previousPageLinkElement = block('page-link', { previous: true });
const nextPageLinkElement = block('page-link', { next: true });

const styles = css({
  display: 'flex',
  fontSize: '16px',

  [`.${pageLinkElement}`]: {
    color: '#555',
    padding: '0.1rem 0.45rem',
    margin: '0 0.4rem',
    whiteSpace: 'nowrap',

    '&:hover': {
      color: '#00e',
      cursor: 'pointer',
    },

    '&:focus': {
      outline: 'none',
    },
  },

  [`.${modifier(pageLinkElement, 'active')}`]: {
    fontWeight: 'bolder',
    color: '#d00',
    border: '2px solid #0a0',
    borderRadius: '50%',

    '&:hover': {
      cursor: 'not-allowed',
      color: '#d00',
    },
  },

  [`.${modifier(pageLinkElement, 'previous')}, .${modifier(pageLinkElement, 'next')}`]: {
    boxShadow: '1px 1px 1px 1px',
    borderRadius: 5,

    '&:hover': {
      color: '#00e',
    },
  },
});


// https://github.com/AdeleD/react-paginate#props
export default function Paginate(props) {
  const { className, onPageChange, ...rest } = props;

  function handlePageChange({ selected }) {
    onPageChange(selected);
  }

  return (
    <ReactPaginate
      previousLabel={<FormattedMessage {...CommonActions.previousPage} />}
      nextLabel={<FormattedMessage {...CommonActions.nextPage} />}
      breakLabel=". . ."
      onPageChange={handlePageChange}
      marginPagesDisplayed={2}
      pageRangeDisplayed={3}
      containerClassName={cx(className, block(), styles)}
      pageLinkClassName={pageLinkElement.toString()}
      activeLinkClassName={activePageLinkElement.toString()}
      previousLinkClassName={previousPageLinkElement.toString()}
      nextLinkClassName={nextPageLinkElement.toString()}
      {...rest}
    />
  );
}
