// For a detailed explanation visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
    clearMocks: true,
    collectCoverageFrom: ['src/**/*.{js,jsx}'],
    coverageDirectory: 'coverage',
    moduleFileExtensions: ['js', 'json', 'jsx'],
    setupFiles: ['<rootDir>/enzyme.config.js'],
    testEnvironment: 'jsdom',
    testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
    testPathIgnorePatterns: ['\\\\node_modules\\\\'],
    testURL: 'http://localhost',
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
    verbose: false,
    moduleNameMapper: {
        '\\.(css|less)$': 'identity-obj-proxy',
        '\\.(jpg|jpeg|png|svg)$': '<rootDir>/__mocks__/fileMock.js',
    },
    transform: {
        '^.+\\.(js|jsx|mjs)$': '<rootDir>/node_modules/babel-jest',
    },
    snapshotSerializers: [
        'jest-serializer-html',
    ],
    coverageThreshold: {
        global: {
            'branches': 50,
            'functions': 50,
            'lines': 50,
            'statements': 50,
        },
    },
};
