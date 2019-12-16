module.exports = {
  // noStackTrace: true,
  // bail: true,
  // cache: false,
  // verbose: true,
  // watch: true,
  coverageDirectory: '<rootDir>/test/jest/coverage',
  collectCoverageFrom: [
    '<rootDir>/src/**/*.vue',
    '<rootDir>/src/**/*.js',
    '<rootDir>/src/**/*.ts'
  ],
  coverageThreshold: {
    global: {
    //  branches: 50,
    //  functions: 50,
    //  lines: 50,
    //  statements: 50
    }
  },
  moduleFileExtensions: [
    'vue',
    'js',
    'json',
    'graphql'
  ],
  testMatch: [
    '<rootDir>/test/jest/__tests__/**/*.spec.js',
    '<rootDir>/test/jest/__tests__/**/*.test.js',
    '<rootDir>/test/snapshots/**/*.spec.js',
    '<rootDir>/src/**/__tests__/*_jest.spec.js'
  ],
  moduleNameMapper: {
    '^vue$': '<rootDir>/node_modules/vue/dist/vue.common.js',
    '^test-utils$': '<rootDir>/node_modules/@vue/test-utils/dist/vue-test-utils.js',
    '^~fixtures/(.*)$': '<rootDir>/../../shared/fixtures/graphql/responses/$1',
    '^~graphql/(.*)$': '<rootDir>/../../shared/graphql/$1',
    '^~/(.*)$': '<rootDir>/$1',
    '^src/(.*)$': '<rootDir>/src/$1',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub'
    // '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/test/__mocks__/fileMock.js',
    // '\\.(css|less)$': '<rootDir>/test/__mocks__/styleMock.js'
  },
  transform: {
    '.*\\.vue$': 'vue-jest',
    '.*\\.js$': 'babel-jest',
    '\\.(gql|graphql)$': '@jagi/jest-transform-graphql'
    // '.*\\.(vue)$': '<rootDir>/node_modules/jest-vue-preprocessor'
  },
  transformIgnorePatterns: [
    '<rootDir>/node_modules/(?!quasar/lang)',
    '/node_modules/(?!(@storybook/.*\\.vue$))'
  ],
  setupFiles: [
    '<rootDir>/test/register-context.js'
  ]
}
