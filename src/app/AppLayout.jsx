import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { css, cx, injectGlobal } from 'emotion';
import * as Navigation from './core/navigation';
import { CommonTextTitles } from './core/intl';
import { TextTitles } from './modules/contract';
import bem from './bem';

const block = bem('app-layout');
const topBarElement = block('top-bar');
const navListElement = block('nav-list');
const navItemElement = block('nav-item');
const mainElement = block('main');

injectGlobal({
  a: {
    textDecoration: 'none',

    '&:hover': {
      color: '#800',
    },
  },

  input: {
    border: 'none',
    borderBottom: '1px #aaa solid',

    '&:hover': {
      outline: 'none',
      borderBottom: '1px #222 solid',
    },
  },

  'ul, ol': {
    padding: 0,
    listStyle: 'none',
  },
});

const styles = css({
  margin: '0 auto',
  width: '80%',
  fontSize: '1.2rem',

  [`.${topBarElement}`]: {
    display: 'flex',
    justifyContent: 'space-around',
    border: '2px solid yellowgreen',
    borderTopWidth: 1,
    borderBottomWidth: 4,
    borderRadius: 10,
  },

  [`.${navListElement}`]: {
    margin: 0,
    listStyle: 'none',
    display: 'flex',
    flexBasis: '70%',
    justifyContent: 'space-around',
  },

  [`.${mainElement}`]: {
    marginLeft: '50%',
    transform: 'translateX(-50%)',
    width: '100%',
  },
});

export default function AppLayout(props) {
  const { children } = props;

  function renderNav() {
    return (
      <nav className={topBarElement.toString()}>
        <FormattedMessage {...CommonTextTitles.appName} />
        <ul className={navListElement.toString()}>
          <li className={navItemElement.toString()}>
            <Link to={Navigation.CONTRACT_LIST_PAGE}>
              <FormattedMessage {...TextTitles.contractListPageTitle} />
            </Link>
          </li>
          <li>
            <Link to={Navigation.CREATE_CONTRACT_PAGE}>
              <FormattedMessage {...TextTitles.createContractPageTitle} />
            </Link>
          </li>
        </ul>
      </nav>
    );
  }

  return (
    <div className={cx(block(), styles)}>
      {renderNav()}
      <main className={mainElement.toString()}>
        {children}
      </main>
    </div>
  );
}

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
