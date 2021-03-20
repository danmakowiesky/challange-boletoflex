// import 'babel-polyfill';

module.exports = {
  clearMocks: true,
  projects: ['<rootDir>/jest.config.js'],
  testEnvironment: 'node',
  testMatch: ['<rootDir>/src/**/*.spec.js'],
};
