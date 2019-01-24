module.exports = {
  rootDir: '../',
  collectCoverageFrom: ['src/**/*.js'],
  coverageDirectory: '<rootDir>/reports/jest-coverage',
  setupFiles: [
    '<rootDir>/config/jest.setup.js',
  ],
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/config/__mocks__/fileTransform.js',
    '\\.(scss)$': 'identity-obj-proxy',
  },
};
