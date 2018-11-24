module.exports = {
  rootDir: 'src/app',
  name: 'UI tests',
  testEnvironment: 'jsdom',
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupTestFrameworkScriptFile: '<rootDir>/uiTestSetup.js',
};
