import React from 'react';
import PropTypes from 'prop-types';
import { isString, noop } from 'lodash';
import { FormattedMessage } from 'react-intl';
import { css, cx } from 'emotion';
import {
  FinalForm, FinalField, StateField, Button,
} from '../../../components';
import { CommonActions } from '../../../core/intl';
import bem from '../../../bem';
import { textErrors, DataTitles } from '../intl';
import { ContractFormFields, CONTRACT_SHAPE } from '../constants';

const block = bem('contract-form');
const fieldElement = block('field');
const fieldRowElement = block('field-row');
const footerElement = block('footer');

const styles = css({
  [`.${fieldRowElement}`]: {
    margin: '1rem',
  },

  [`.${fieldElement}`]: {
    width: '100%',
  },

  [`.${footerElement}`]: {
    paddingLeft: '1rem',
    marginTop: '1rem',
  },
});

export const ContractFormValidator = {
  validateSurname(name) {
    const valid = isString(name) && name.trim().length > 0;
    return valid ? null : <FormattedMessage {...textErrors.invalidSurname} />;
  },
  validateUsername(name) {
    const valid = isString(name) && name.trim().length > 0;
    return valid ? null : <FormattedMessage {...textErrors.invalidUsername} />;
  },
  validateAmount(amount) {
    const valid = Number(amount) > 0;
    return valid ? null : <FormattedMessage {...textErrors.invalidAmount} />;
  },
  validateCurrency(currency) {
    // not sure how to validate
    // can be a list defined somewhere, this depends
    const valid = isString(currency) > 0;
    return valid ? null : <FormattedMessage {...textErrors.invalidCurrency} />;
  },
};


export default function ContractForm(props) {
  const { initialValues, className, handleSubmit } = props;

  function renderAmountField() {
    return (
      <FinalField
        name={ContractFormFields.AMOUNT}
        validate={ContractFormValidator.validateAmount}
        render={({ input, meta }) => (
          <StateField
            className={fieldElement.toString()}
            labelContent={<FormattedMessage {...DataTitles.amountInUsd} />}
            input={input}
            {...meta}
          />
        )}
      />
    );
  }

  function renderCurrencyField() {
    return (
      <FinalField
        name={ContractFormFields.CURRENCY}
        validate={ContractFormValidator.validateCurrency}
        render={({ input, meta }) => (
          <StateField
            className={fieldElement.toString()}
            labelContent={<FormattedMessage {...DataTitles.currenncy} />}
            input={input}
            {...meta}
          />
        )}
      />
    );
  }

  function renderUserNameField() {
    return (
      <FinalField
        name={ContractFormFields.USERNAME}
        validate={ContractFormValidator.validateUsername}
        render={({ input, meta }) => (
          <StateField
            className={fieldElement.toString()}
            labelContent={<FormattedMessage {...DataTitles.userName} />}
            input={input}
            {...meta}
          />
        )}
      />
    );
  }
  function renderUserSurnameField() {
    return (
      <FinalField
        name={ContractFormFields.SURNAME}
        validate={ContractFormValidator.validateSurname}
        render={({ input, meta }) => (
          <StateField
            className={fieldElement.toString()}
            labelContent={<FormattedMessage {...DataTitles.userSurname} />}
            input={input}
            {...meta}
          />
        )}
      />
    );
  }

  return (
    <FinalForm
      initialValues={initialValues}
      onSubmit={handleSubmit}
      render={({
        handleSubmit: save,
        invalid,
        pristine,
      }) => (
        <section className={cx(className, block.toString(), styles)}>
          <div className={fieldRowElement}>
            {renderUserNameField()}
          </div>
          <div className={fieldRowElement}>
            {renderUserSurnameField()}
          </div>
          <div className={fieldRowElement}>
            {renderCurrencyField()}
          </div>
          <div className={fieldRowElement}>
            {renderAmountField()}
          </div>
          <div className={footerElement}>
            <Button
              disabled={invalid || pristine}
              onClick={(invalid || pristine) ? null : save}
              type="button"
            >
              <FormattedMessage {...CommonActions.save} />
            </Button>
          </div>
        </section>
      )}
    />
  );
}

ContractForm.propTypes = {
  className: PropTypes.string,
  initialValues: PropTypes.shape(CONTRACT_SHAPE),
  handleSubmit: PropTypes.func,
};
ContractForm.defaultProps = {
  initialValues: null,
  className: null,
  handleSubmit: noop,
};
