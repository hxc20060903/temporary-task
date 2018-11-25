import React, { PureComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { css, cx } from 'emotion';
import { ContractStateSelector } from './reducer';
import { actionCreators } from './actions';

import bem from '../../bem';

import { TextTitles } from './intl';
import { ContractForm } from './components';
import { CONTRACT_SHAPE } from './constants';

const block = bem('update-contract-page');
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

class UpdateContractPage extends PureComponent {
  componentDidMount() {
    const { match: { params: { contractId } }, getContract } = this.props;
    getContract(contractId);
  }

  render() {
    const { initialValues, updateContract } = this.props;
    return (
      <div className={cx(block.toString(), styles)}>
        <h2 className={titleElement}>
          <FormattedMessage {...TextTitles.updateContractPageTitle} />
        </h2>
        <ContractForm
          initialValues={initialValues}
          handleSubmit={updateContract}
          className={formElement.toString()}
        />
      </div>
    );
  }
}

UpdateContractPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({ contractId: PropTypes.string }),
  }).isRequired,
  initialValues: PropTypes.shape(CONTRACT_SHAPE).isRequired,
  updateContract: PropTypes.func.isRequired,
  getContract: PropTypes.func.isRequired,
};

const mapStateToProps = (state, props) => {
  const { contractId } = props.match.params;
  const contract = ContractStateSelector.getContractById(state, contractId);
  return {
    initialValues: contract,
  };
};
const dispatchToProps = {
  getContract: actionCreators.getContractStart,
  updateContract: actionCreators.updateContractStart,
};

const enhance = compose(
  withRouter,
  connect(mapStateToProps, dispatchToProps),
);
export default enhance(UpdateContractPage);
