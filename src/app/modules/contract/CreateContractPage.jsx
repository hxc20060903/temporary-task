import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { css, cx } from 'emotion';
import { withRouter } from 'react-router-dom';

import bem from '../../bem';

import { TextTitles } from './intl';
import { ContractForm } from './components';
import { actionCreators } from './actions';

const block = bem('create-contract-page');
const titleElement = block('title');
const formElement = block('form');

const styles = css({
  width: '60%',
  margin: '0 auto',

  [`.${formElement}`]: {
    padding: '1.2rem',
    border: '0.4rem solid tan',
    borderRadius: '1rem',
    boxShadow: '0 0 0 0.5rem #655',
    outline: '0.5rem solid #655',
  },
});

function CreateContractPage(props) {
  const { createContract } = props;
  return (
    <div className={cx(block.toString(), styles)}>
      <h2 className={titleElement}>
        <FormattedMessage {...TextTitles.createContractPageTitle} />
      </h2>
      <ContractForm
        handleSubmit={createContract}
        className={formElement.toString()}
      />
    </div>
  );
}

CreateContractPage.propTypes = {
  createContract: PropTypes.func.isRequired,
};

const dispatchToProps = {
  createContract: actionCreators.createContractStart,
};

const enhance = compose(
  withRouter,
  connect(null, dispatchToProps),
);
export default enhance(CreateContractPage);
