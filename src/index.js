import createApplication from './app';

const start = createApplication();
start();

// enable hot reload on the webpack-serve
if (module.hot) {
  module.hot.accept();
}
