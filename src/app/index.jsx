import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { createEpicMiddleware } from 'redux-observable';
import createReduxPromiseListener from 'redux-promise-listener';
import IntlProvider from './core/intl';

import ApiClient from './core/sender';
import rootReducer from './reducer';
import rootEpic from './epic';
import Application from './Application';

export default function createApplication(serverUrl = 'http://localhost:4000') {
  const send = ApiClient({ apiBaseUrl: `${serverUrl}/api` });
  const epicMiddleware = createEpicMiddleware({
    dependencies: { send },
  });

  // eslint-disable-next-line no-underscore-dangle
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const reduxPromiseListener = createReduxPromiseListener();
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(
      epicMiddleware,
      reduxPromiseListener.middleware,
    )),
  );
  function start() {
    epicMiddleware.run(rootEpic);
    ReactDOM.render(
      <Provider store={store}>
        <IntlProvider locale="en">
          <Application />
        </IntlProvider>
      </Provider>,
      document.getElementById('root'),
    );
  }
  return start;
}
