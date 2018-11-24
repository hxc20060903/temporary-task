import React from 'react';
import PropTypes from 'prop-types';
import { css, cx } from 'emotion';

import bem, { modifier } from '../bem';

const block = bem('state-field');
const errorElement = block('error');
const inputElement = block('input');
const styles = css({
  [`&.${modifier(block, 'invalid')}`]: {
    color: '#b00',
  },

  [`.${errorElement}`]: {
    color: '#f00',
    fontSize: '80%',
  },

  [`.${inputElement}`]: {
    width: '100%',
    fontSize: '1rem',

    '&:focus': {
      outline: 'none',
    },
  },
});


export default function StateField({
  labelContent,
  input,
  className,
  error,
  ...finalFormFieldMeta
}) {
  const { invalid, active, touched } = finalFormFieldMeta;
  return (
    <div className={cx(className, block({ invalid, active }).toString(), styles)}>
      <label>
        {labelContent}
        <div>
          <input className={inputElement.toString()} {...input} />
        </div>
        {(touched && error) && <div className={errorElement}>{error}</div>}
      </label>
    </div>
  );
}

StateField.propTypes = {
  labelContent: PropTypes.node.isRequired,
  error: PropTypes.node,
  className: PropTypes.string,
};
StateField.defaultProps = {
  className: null,
  error: null,
};
