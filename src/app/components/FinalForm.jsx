import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-final-form';
import { pickBy } from 'lodash';

export default function FinalForm(props) {
  const { subscription, ...others } = props;
  const finalSubscription = pickBy({
    pristine: true,
    active: true,
    invalid: true,
    touched: true,
    submitting: true,
    submitSucceeded: true,
    errors: true,
    ...subscription,
  }, Boolean);
  return (
    <Form
      subscription={finalSubscription}
      {...others}
    />
  );
}

FinalForm.propTypes = {
  subscription: PropTypes.objectOf(PropTypes.bool),
};

FinalForm.defaultProps = {
  subscription: null,
};
