const path = require('path')

module.exports = {
  rootDir: path.resolve('src'),
  setupFiles: [path.resolve('config/jest/setupEnzyme.js')],
  setupTestFrameworkScriptFile: path.resolve(
    'node_modules/jest-enzyme/lib/index.js'
  ),
  testEnvironment: 'enzyme',
  collectCoverage: true,
  coverageReporters: ['json', 'html'],
  coverageDirectory: '../coverage',
  collectCoverageFrom: [
    '<rootDir>/**/*.js',
    '!<rootDir>/**/*.stories.js',
    '!node_modules',
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
}
