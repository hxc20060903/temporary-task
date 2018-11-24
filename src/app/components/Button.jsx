import React from 'react';
import PropTypes from 'prop-types';
import { css, cx } from 'emotion';
import bem, { modifier } from '../bem';

const block = bem('button');
const contentElement = block('content');

const styles = css({
  border: 'none',
  fontWeight: 'bold',
  background: '#0a0',
  color: '#333',
  borderRadius: 5,

  '&:hover': {
    cursor: 'pointer',
  },

  [`&.${modifier(block, 'disabled')}`]: {
    background: 'grey',
    cursor: 'not-allowed',
  },

  [`.${contentElement}`]: {
    padding: '0.5rem',
  },
});

export default function Button(props) {
  const {
    className, children, disabled, ...rest
  } = props;
  const finalClassName = cx(className, block({ disabled }).toString(), styles);
  return (
    <button type="button" {...rest} className={finalClassName} disabled={disabled}>
      <div className={contentElement.toString()}>{children}</div>
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};
Button.defaultProps = {
  className: null,
  disabled: false,
};
