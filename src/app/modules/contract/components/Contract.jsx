import React from 'react';
import PropTypes from 'prop-types';
import { css, cx } from 'emotion';
import { noop } from 'lodash';
import { FormattedMessage, FormattedDate } from 'react-intl';

import { DataTitles } from '../intl';
import contractShape from '../constants/contractShape';
import bem from '../../../bem';

const block = bem('contract');
const fieldRowElement = block('field-row');
const fieldNameElement = block('field-name');
const fieldContentElement = block('field-content');
const closeActionElement = block('close-action');

const styles = css({
  background: '#aaa',
  borderRadius: '1rem',
  padding: '1.8rem',
  position: 'relative',
  outline: 'none',

  '&:hover': {
    background: '#bfd',
    cursor: 'pointer',
  },

  [`.${closeActionElement}`]: {
    position: 'absolute',
    top: '-0.4rem',
    right: '-0.4rem',
    padding: '0.2rem 0.4rem',
    background: '#800',
    color: '#fff',
    borderRadius: '40%',
    fontSize: '1rem',
    boxShadow: '-1px 1px 1px',
    outline: 'none',

    '&:hover': {
      cursor: 'pointer',
      background: '#d00',
    },
  },

  [`.${fieldRowElement}`]: {
    display: 'flex',
    justifyContent: 'space-between',
  },

  [`.${fieldNameElement}`]: {
    whiteSpace: 'nowrap',
    color: '#111',
    fontStyle: 'italic',
  },

  [`.${fieldContentElement}`]: {
    whiteSpace: 'nowrap',
    fontWeight: 'bold',
  },
});

export default function Contract({
  data, className, onClick, onClose,
}) {
  const {
    userName,
    userSurname,
    currency,
    date,
    amountInUsd,
  } = data;

  // eslint-disable-next-line react/prop-types
  function renderRow({ name, content }) {
    return (
      <div className={fieldRowElement}>
        <div className={fieldNameElement}>
          {name}
        </div>
        <div className={fieldContentElement}>
          {content}
        </div>
      </div>
    );
  }

  function handleClose(e) {
    e.stopPropagation();
    onClose(e);
  }

  function renderCloseButton() {
    return (
      <button
        onClick={handleClose}
        type="button"
        className={closeActionElement}
      >
        {'X'}
      </button>
    );
  }

  return (
    <div
      className={cx(className, block.toString(), styles)}
      onClick={onClick}
      role="button"
      tabIndex={0}
    >
      {renderCloseButton()}
      {renderRow({
        name: <FormattedMessage {...DataTitles.userName} />,
        content: userName,
      })}
      {renderRow({
        name: <FormattedMessage {...DataTitles.userSurname} />,
        content: userSurname,
      })}
      {renderRow({
        name: <FormattedMessage {...DataTitles.currenncy} />,
        content: currency,
      })}
      {renderRow({
        name: <FormattedMessage {...DataTitles.date} />,
        content: (
          <FormattedDate
            value={new Date(date)}
            year="numeric"
            month="long"
            day="2-digit"
          />
        ),
      })}
      {renderRow({
        name: <FormattedMessage {...DataTitles.amountInUsd} />,
        content: amountInUsd,
      })}
    </div>
  );
}

Contract.propTypes = {
  data: contractShape.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  onClose: PropTypes.func,
};
Contract.defaultProps = {
  className: null,
  onClick: noop,
  onClose: noop,
};
