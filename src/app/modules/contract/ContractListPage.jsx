import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { css, cx } from 'emotion';
import { FormattedMessage } from 'react-intl';
import { Trail } from 'react-spring';
import { withRouter } from 'react-router-dom';

import { actionCreators } from './actions';
import { CONTRACT_SHAPE } from './constants';
import { TextTitles } from './intl';
import { Contract } from './components';
import { ContractStateSelector } from './reducer';

import bem from '../../bem';
import { Paginate } from '../../components';
import { getUpdateContractPagePath } from '../../core/navigation';

const block = bem('contract-list-page');
const titleElement = block('title');
const listElement = block('list');
const itemElement = block('item');
const paginateElement = block('paginate');

const styles = css({
  width: '60%',
  margin: '0 auto',

  [`.${listElement}`]: {
    background: 'brown',
    border: '0.4rem solid brown',
    borderRadius: '1rem',
    boxShadow: '0 0 0 0.5rem #655',
    outline: '0.5rem solid #655',
  },

  [`.${itemElement}`]: {
    margin: '0.5rem',
  },

  [`.${paginateElement}`]: {
    float: 'right',
  },
});

class ContractListPage extends PureComponent {
  static propTypes = {
    contracts: PropTypes.arrayOf(CONTRACT_SHAPE).isRequired,
    totalPages: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    removeContract: PropTypes.func.isRequired,
    getContractPage: PropTypes.func.isRequired,
  }

  componentDidMount() {
    const { getContractPage, currentPage, pageSize } = this.props;
    getContractPage({ currentPage, pageSize });
  }

  redirectToContractUpdatePage = (id) => {
    const { history } = this.props;
    history.push(getUpdateContractPagePath({ contractId: id }));
  }

  handleChangePage = (newPageIndex) => {
    const { getContractPage, pageSize } = this.props;
    getContractPage({ currentPage: newPageIndex, pageSize });
  }

  render() {
    const {
      contracts, totalPages, currentPage, removeContract,
    } = this.props;
    return (
      <div className={cx(block(), styles)}>
        <h2 className={titleElement}><FormattedMessage {...TextTitles.contractListPageTitle} /></h2>
        <ol className={listElement}>
          <Trail
            items={contracts}
            keys={contract => contract.id}
            from={{ transform: 'translate3d(1rem,0,0)', opacity: 0.4 }}
            to={{ transform: 'translate3d(0,0px,0)', opacity: 1 }}
          >
            {contract => style => (
              <li style={style}>
                <Contract
                  className={itemElement.toString()}
                  data={contract}
                  onClick={() => this.redirectToContractUpdatePage(contract.id)}
                  onClose={() => removeContract(contract.id)}
                />
              </li>
            )}
          </Trail>
        </ol>
        <Paginate
          className={paginateElement.toString()}
          pageCount={totalPages}
          forcePage={currentPage}
          onPageChange={this.handleChangePage}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  totalPages: ContractStateSelector.getTotalPages(state),
  currentPage: ContractStateSelector.getCurrentPage(state),
  pageSize: ContractStateSelector.getPageSize(state),
  contracts: ContractStateSelector.getSelectedContracts(state),
});
const mapDispatchToProps = {
  removeContract: actionCreators.removeContractStart,
  getContractPage: actionCreators.getContractsStart,
};
const enhance = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
);
export { ContractListPage };
export default enhance(ContractListPage);
