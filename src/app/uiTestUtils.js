// https://medium.com/@sapegin/testing-react-intl-components-with-jest-and-enzyme-f9d43d9c923e
import { cloneElement } from 'react';
import PropTypes from 'prop-types';
import { mount } from 'enzyme';
import { IntlProvider, intlShape } from 'react-intl';
import { BrowserRouter } from 'react-router-dom';

// Instantiate router context
const router = {
  history: new BrowserRouter().history,
  route: {
    location: {},
    match: {},
  },
};

const intlProvider = new IntlProvider({ locale: 'en' });
const { intl } = intlProvider.getChildContext();

// eslint-disable-next-line
export function mountWithAppContext(
  node,
  { context, childContextTypes, ...restOptions } = {},
) {
  return mount(
    cloneElement(node, { intl, router }),
    {
      context: {
        ...context,
        intl,
        router,
      },
      childContextTypes: {
        ...childContextTypes,
        intl: intlShape,
        // router doesn't provide the props shape
        router: PropTypes.object,
      },
      ...restOptions,
    },
  );
}
